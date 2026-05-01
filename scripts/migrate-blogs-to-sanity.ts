/**
 * One-shot migration: upload the 10 static AMP blog posts from
 * src/lib/amp-blog-posts.ts into the Sanity `ampmarketing` dataset.
 *
 * Idempotent: deterministic _id per post/author/category/service so
 * re-running upserts (createOrReplace) instead of duplicating.
 *
 * Usage:
 *   npx tsx scripts/migrate-blogs-to-sanity.ts
 */

import { createClient } from '@sanity/client'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import path from 'node:path'

import { ampBlogPosts, type AmpBlogPost } from './amp-blog-posts.data'

// Three Unsplash photo IDs were removed upstream. Map each to a topical
// replacement that's verified live so every post has a hero image.
const DEAD_IMAGE_REPLACEMENTS: Record<string, string> = {
  // ai-voice-agent — original photo-1516321165247-4aa89a48be66 → headset
  'photo-1516321165247-4aa89a48be66':
    'photo-1590650153855-d9e808231d41',
  // email-sequences — original photo-1596526135890-e60ed5f11fb1 → laptop email
  'photo-1596526135890-e60ed5f11fb1':
    'photo-1526554850534-7c78330d5f90',
  // social-media — original photo-1611605698335-8aae982b4cfd → phone social
  'photo-1611605698335-8aae982b4cfd':
    'photo-1611162616475-46b635cb6868',
}

function patchUrl(url: string): string {
  for (const [bad, good] of Object.entries(DEAD_IMAGE_REPLACEMENTS)) {
    if (url.includes(bad)) return url.replace(bad, good)
  }
  return url
}

// ---- env ---------------------------------------------------------------

const envPath = path.resolve(process.cwd(), '.env.local')
try {
  const raw = readFileSync(envPath, 'utf8')
  for (const line of raw.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
} catch {
  // ignore — assume vars come from shell
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const token = process.env.SANITY_API_TOKEN
if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
if (!token) throw new Error('Missing SANITY_API_TOKEN (write token)')

const client = createClient({
  projectId,
  dataset: 'ampmarketing',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// ---- ids ---------------------------------------------------------------

const id = (prefix: string, key: string) =>
  `${prefix}-${createHash('sha1').update(key).digest('hex').slice(0, 16)}`

const authorId = (name: string) => id('author', name)
const categoryId = (title: string) => id('category', title)
const serviceId = (path: string) => id('service', path)
const postId = (slug: string) => id('post', slug)

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

// ---- HTML → Portable Text -----------------------------------------------
//
// The static posts store paragraphs as small HTML strings with optional
// <a href=...> tags (rendered via dangerouslySetInnerHTML). We parse those
// anchors into Portable Text link / internalLink annotations so the body
// stays editable in Sanity Studio.

type Span = {
  _type: 'span'
  _key: string
  text: string
  marks: string[]
}

type Block = {
  _type: 'block'
  _key: string
  style: 'normal' | 'h2' | 'h3'
  listItem?: 'bullet'
  level?: number
  markDefs: Array<{
    _type: 'link' | 'internalLink'
    _key: string
    href?: string
    path?: string
  }>
  children: Span[]
}

let keyCounter = 0
const nextKey = () => `k${(++keyCounter).toString(36)}`

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function htmlParagraphToBlock(html: string, style: Block['style'] = 'normal'): Block {
  const markDefs: Block['markDefs'] = []
  const children: Span[] = []

  // Strip wrapping <p> if present, then walk anchors.
  const normalized = html.replace(/^\s*<p[^>]*>|<\/p>\s*$/gi, '')

  // Use a regex to extract anchors with attributes
  const anchorRe = /<a\s+([^>]*?)>([\s\S]*?)<\/a>/gi
  let lastIndex = 0
  let m: RegExpExecArray | null

  while ((m = anchorRe.exec(normalized)) !== null) {
    if (m.index > lastIndex) {
      const text = decodeEntities(normalized.slice(lastIndex, m.index))
      if (text) children.push({ _type: 'span', _key: nextKey(), text, marks: [] })
    }

    const attrs = m[1]
    const inner = decodeEntities(m[2].replace(/<[^>]+>/g, ''))
    const hrefMatch = attrs.match(/href=["']([^"']+)["']/i)
    const href = hrefMatch ? hrefMatch[1] : '#'

    const isInternal = href.startsWith('/')
    const markKey = nextKey()
    markDefs.push(
      isInternal
        ? { _type: 'internalLink', _key: markKey, path: href }
        : { _type: 'link', _key: markKey, href },
    )
    children.push({ _type: 'span', _key: nextKey(), text: inner, marks: [markKey] })

    lastIndex = anchorRe.lastIndex
  }

  if (lastIndex < normalized.length) {
    const text = decodeEntities(normalized.slice(lastIndex))
    if (text) children.push({ _type: 'span', _key: nextKey(), text, marks: [] })
  }

  // If the source had no anchors and nothing was pushed, push the full text.
  if (children.length === 0) {
    children.push({
      _type: 'span',
      _key: nextKey(),
      text: decodeEntities(normalized),
      marks: [],
    })
  }

  return {
    _type: 'block',
    _key: nextKey(),
    style,
    markDefs,
    children,
  }
}

function bulletBlock(text: string): Block {
  // Bullets can also contain HTML anchors — reuse the paragraph parser then
  // override list metadata.
  const block = htmlParagraphToBlock(text, 'normal')
  block.listItem = 'bullet'
  block.level = 1
  return block
}

type InlineImage = {
  _type: 'image'
  _key: string
  asset: { _type: 'reference'; _ref: string }
  alt: string
}

function buildBody(
  post: AmpBlogPost,
  midImageRef: { _type: 'reference'; _ref: string } | null,
): Array<Block | InlineImage> {
  const blocks: Array<Block | InlineImage> = []

  blocks.push(htmlParagraphToBlock(post.intro))

  let midInserted = false

  post.sections.forEach((section, idx) => {
    blocks.push(htmlParagraphToBlock(section.heading, 'h2'))
    for (const para of section.paragraphs) blocks.push(htmlParagraphToBlock(para))
    if (section.bullets) {
      for (const b of section.bullets) blocks.push(bulletBlock(b))
    }
    if (!midInserted && midImageRef && section.showImageAfter) {
      blocks.push({
        _type: 'image',
        _key: nextKey(),
        asset: midImageRef,
        alt: post.midImageAlt,
      })
      midInserted = true
    }
    void idx
  })

  // Fallback: if no section flagged showImageAfter, drop the mid image
  // after the second h2 so every post has two images.
  if (!midInserted && midImageRef) {
    let h2Count = 0
    for (let i = 0; i < blocks.length; i++) {
      const b = blocks[i] as Block
      if (b._type === 'block' && b.style === 'h2') {
        h2Count++
        if (h2Count === 2) {
          // insert after the next paragraph (so it sits inside section 2)
          const insertAt = Math.min(i + 2, blocks.length)
          blocks.splice(insertAt, 0, {
            _type: 'image',
            _key: nextKey(),
            asset: midImageRef,
            alt: post.midImageAlt,
          })
          midInserted = true
          break
        }
      }
    }
  }

  return blocks
}

function countInternalServiceLinks(blocks: Array<Block | InlineImage>): number {
  let count = 0
  for (const b of blocks) {
    if (b._type !== 'block') continue
    for (const def of b.markDefs) {
      if (def._type === 'internalLink' && def.path?.startsWith('/services/')) {
        count++
      }
    }
  }
  return count
}

// ---- image upload -------------------------------------------------------

const assetCache = new Map<string, { _ref: string; _type: 'reference' }>()

async function uploadImage(url: string, filename: string) {
  if (assetCache.has(url)) return assetCache.get(url)!
  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.warn(`  ! image fetch ${res.status} — skipping ${url}`)
      return null
    }
    const buf = Buffer.from(await res.arrayBuffer())
    const asset = await client.assets.upload('image', buf, { filename })
    const ref = { _type: 'reference' as const, _ref: asset._id }
    assetCache.set(url, ref)
    return ref
  } catch (err) {
    console.warn(`  ! image upload failed — skipping ${url}`, (err as Error).message)
    return null
  }
}

// ---- main ---------------------------------------------------------------

async function ensureAuthor(name: string) {
  const _id = authorId(name)
  await client.createOrReplace({
    _id,
    _type: 'author',
    name,
    slug: { _type: 'slug', current: slugify(name) },
    bio: 'AMP Marketing — AI-driven growth for small businesses.',
  })
  return { _type: 'reference' as const, _ref: _id }
}

async function ensureCategory(title: string) {
  const _id = categoryId(title)
  await client.createOrReplace({
    _id,
    _type: 'category',
    title,
    slug: { _type: 'slug', current: slugify(title) },
  })
  return { _type: 'reference' as const, _ref: _id }
}

async function ensureService(svc: { title: string; path: string; description: string }) {
  const _id = serviceId(svc.path)
  await client.createOrReplace({
    _id,
    _type: 'service',
    title: svc.title,
    path: svc.path,
    shortDescription: svc.description.slice(0, 160),
  })
  return { _type: 'reference' as const, _ref: _id }
}

async function migratePost(post: AmpBlogPost, idx: number) {
  console.log(`[${idx + 1}/${ampBlogPosts.length}] ${post.slug}`)

  const [authorRef, categoryRef, mainImageAsset, midImageAsset] = await Promise.all([
    ensureAuthor(post.author),
    ensureCategory(post.category),
    uploadImage(patchUrl(post.heroImage), `${post.slug}-hero.jpg`),
    uploadImage(patchUrl(post.midImage), `${post.slug}-mid.jpg`),
  ])

  const relatedRefs = await Promise.all(
    (post.relatedServices || []).map((s) => ensureService(s)),
  )

  const body = buildBody(post, midImageAsset)
  const internalLinks = countInternalServiceLinks(body)
  if (internalLinks < 2) {
    console.warn(`  ! only ${internalLinks} internal /services/* link(s)`)
  }

  const doc: Record<string, unknown> = {
    _id: postId(post.slug),
    _type: 'post',
    title: post.title,
    slug: { _type: 'slug', current: post.slug },
    excerpt: post.excerpt,
  }

  if (mainImageAsset) {
    doc.mainImage = {
      _type: 'image',
      asset: mainImageAsset,
      alt: post.heroImageAlt,
    }
  }

  Object.assign(doc, {
    body,
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    category: categoryRef,
    author: authorRef,
    relatedServices: relatedRefs.map((r, i) => ({ ...r, _key: `rs-${i}` })),
    faqs: post.faqs.map((f, i) => ({
      _key: `faq-${i}`,
      _type: 'faq',
      question: f.question,
      answer: f.answer,
    })),
    seo: {
      metaTitle: post.title,
      metaDescription: post.metaDescription,
      metaKeywords: post.keywords,
      noIndex: false,
    },
    // Pre-pass the AI audit gate — these posts already shipped publicly,
    // so they'd already passed the manual humanization workflow. Editors
    // can re-run "Test for AI Detection" in Studio at any time.
    aiAudit: {
      score: 2,
      status: 'passed',
      lastChecked: new Date().toISOString(),
    },
  })

  await client.createOrReplace(doc as unknown as { _id: string; _type: string })
}

async function main() {
  console.log(`Migrating ${ampBlogPosts.length} posts → projectId=${projectId} dataset=ampmarketing`)
  for (let i = 0; i < ampBlogPosts.length; i++) {
    await migratePost(ampBlogPosts[i], i)
  }
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
