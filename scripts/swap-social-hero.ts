/**
 * One-shot: swap the social-media post hero to a multi-platform graphic.
 *   npx tsx scripts/swap-social-hero.ts
 */
import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const env = readFileSync(path.resolve(process.cwd(), '.env.local'), 'utf8')
for (const line of env.split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'ampmarketing',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

const POST_ID = 'post-' + 'social-media-content-system-without-burnout'
// Adem AY — multi-platform social apps on phone (Instagram, Facebook, YouTube, X, TikTok)
const NEW_HERO = 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=600&fit=crop&auto=format&q=75'
const ALT = 'Phone displaying multiple social media app icons including Instagram, Facebook, YouTube, X and TikTok'

async function main() {
  // Find post by slug instead of guessing _id (the deterministic hash is computed in migration script)
  const post = await client.fetch<{ _id: string }>(
    '*[_type=="post" && slug.current==$slug][0]{_id}',
    { slug: 'social-media-content-system-without-burnout' },
  )
  if (!post) throw new Error('post not found')

  const res = await fetch(NEW_HERO)
  if (!res.ok) throw new Error(`fetch ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const asset = await client.assets.upload('image', buf, {
    filename: 'social-media-multi-platform-hero.jpg',
  })

  await client
    .patch(post._id)
    .set({
      mainImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
        alt: ALT,
      },
    })
    .commit()

  console.log(`Patched ${post._id} → ${asset._id}`)
  void POST_ID
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
