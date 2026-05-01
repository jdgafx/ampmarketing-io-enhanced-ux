# AMP Marketing — Full Site Audit
**Date:** 2026-05-01  
**Hive:** `hive-1777670134508-3y0c48` (hierarchical/byzantine, 9 workers)  
**Build health:** TypeScript ✅ clean · ESLint ✅ clean (source) · 404 page ✅

---

## CRITICAL — P0 (Fix before next deploy)

### 1. Three different domains in source — catastrophic SEO split

Every canonical URL, OG URL, and sitemap reference points to a different hostname:

| File | URL used |
|------|----------|
| `src/app/layout.tsx` (metadataBase) | `https://ampmarketing-io-enhanced-ux.netlify.app` |
| `src/app/blog/[slug]/page.tsx` (SITE_URL) | `https://ampmarketing-io-enhanced-ux.netlify.app` |
| `src/app/sitemap.ts` (baseUrl) | `https://melodic-flow-enhanced-ux.netlify.app` ← **wrong** |
| `src/app/robots.ts` (sitemap URL) | `https://melodic-flow-enhanced-ux.netlify.app/sitemap.xml` ← **wrong** |
| `src/app/contact/layout.tsx` (OG url) | `https://melodic-flow-enhanced-ux.netlify.app/contact` ← **wrong** |
| `public/robots.txt` (sitemap) | `https://ampaiexperts.com/sitemap.xml` ← **different company!** |
| `public/sitemap.xml` | All URLs under `https://ampaiexperts.com` ← **different company!** |

**Fix:** Set a single `NEXT_PUBLIC_SITE_URL` env var and use it everywhere. Canonical should be `https://ampmarketing.io`. Delete `public/robots.txt` and `public/sitemap.xml` entirely (they are stale `ampaiexperts.com` files that will be served from `out/` and may override the generated versions).

### 2. `public/robots.txt` and `public/sitemap.xml` are from a different company

Both files reference `https://ampaiexperts.com` — an entirely different business. With `output: 'export'`, Next.js copies `public/` to `out/`, and these stale files are being deployed live. They tell Google this site belongs to ampaiexperts.com.

**Fix:** Delete both files immediately.
```bash
rm public/robots.txt public/sitemap.xml
```

### 3. OG image is SVG — social previews broken everywhere

`layout.tsx` sets OG/Twitter images to `/logo-amp-marketing.svg`. Facebook, LinkedIn, Twitter/X, and Slack **do not render SVG as social share previews**. Every share produces a blank card.

**Fix:** Export a 1200×630 PNG from the SVG and update all OG image references:
```tsx
// layout.tsx
images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AMP Marketing" }]
```
No PNG/JPG exists in `public/` — need to create one.

---

## HIGH — P1 (Fix this sprint)

### 4. All 10 service pages have no `openGraph` or `alternates.canonical`

Every service page (`/services/ad-copy`, `/services/ai-chatbot`, etc.) uses a bare `metadata` object with only `title` and `description`. Zero OG tags means no social cards. Zero canonical means Google can pick any URL variant as canonical.

Additionally, these titles are set as plain strings (not using the root template), so they render without the "| AMP Marketing" suffix:
- ❌ `"Peak Performance Ads Optimization"` 
- ❌ `"High-Converting Pages"`
- Should be: `"Ad Copy That Converts | AMP Marketing"`

**Fix:** Add `openGraph` block and `alternates: { canonical: '...' }` to all 10 service pages. Standardize titles to match the root template pattern.

### 5. No security headers in `netlify.toml`

The `[[headers]]` section is entirely absent. The site ships with no:
- `X-Frame-Options` (clickjacking)
- `X-Content-Type-Options`
- `Strict-Transport-Security`
- `Referrer-Policy`
- `Permissions-Policy`
- `Content-Security-Policy`

**Fix:** Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
```

### 6. ESLint scopes into `.netlify/static/` — OOM on lint runs

`eslint.config.mjs` does not ignore `.netlify/`. ESLint attempts to parse the 4.6MB + 1MB pre-built chunks and runs out of heap memory (crash at 4GB). Exit code 0 was lucky timing.

**Fix:** Add to `eslint.config.mjs`:
```js
{ ignores: ['.netlify/**', 'out/**', 'node_modules/**'] }
```

### 7. Largest JS chunk is 4.6MB uncompressed

`out/_next/static/chunks/76b1dfcca7d0ada5.js` = **4.65MB**. Total JS = 8.3MB. This is the Sanity + PortableText + image-url bundle being pulled into the main chunk. On a slow 4G connection this adds ~2s+ to TTI.

**Fix:** Audit what's in that chunk (`npx @next/bundle-analyzer`). The PortableText renderer is only used on blog post pages — it should be dynamically imported:
```tsx
const PortableText = dynamic(() => import('@portabletext/react').then(m => m.PortableText))
```

---

## MEDIUM — P2

### 8. `cursor: none` in `globals.css` — accessibility issue

The body CSS hides the system cursor for all users. Users with motor disabilities who rely on precise cursor positioning lose their visual anchor. The custom cursor JS (`CursorTracker`) also runs unconditionally on all pages.

**Fix:** Only hide cursor when the custom one has loaded and the device supports hover:
```css
@media (hover: hover) { body { cursor: none; } }
```

### 9. Sanity Studio at `/studio` is publicly indexable

`robots.ts` disallows `/private/` and `/admin/` but not `/studio/`. The Sanity CMS admin panel is deployed publicly and will be crawled.

**Fix:** Add `/studio/` to the disallow list in `robots.ts`:
```ts
disallow: ['/private/', '/admin/', '/studio/'],
```

### 10. Blog always appends 5 external curation posts

`blog/page.tsx` does `posts = [...sanityPosts, ...fallbackPosts]` even when Sanity returns content. The 5 fallback posts are external links (HubSpot, LinkedIn, etc.) with `slug: { current: '' }`, which produces `href="/blog/"` — the blog index itself — for internal link building. This is a broken link generator.

**Fix:** Only show fallback posts when Sanity returns zero results. Remove or fix the empty-slug external posts:
```tsx
posts = sanityPosts.length > 0 ? sanityPosts : fallbackPosts;
```

### 11. Dead files — `page.tsx.cpy.html` and `Layout.tsx`

- `src/app/page.tsx.cpy.html` — HTML copy of a previous homepage version. Not served but pollutes the source tree.
- `src/components/Layout.tsx` — Uses raw `<img>` tags and is only referenced in the `.cpy.html` file. No active page imports it.

**Fix:** Delete both files.

### 12. `public/sitemap.xml` conflicts with generated sitemap

Already covered in P0 #2, but worth calling out separately: even if it weren't pointing to the wrong domain, having both `public/sitemap.xml` AND `src/app/sitemap.ts` means two files compete for the same output path. The `public/` copy wins in Next.js static export.

### 13. Unsplash fallback image in `blog/[slug]/page.tsx`

When a post has no `mainImage`, the code falls back to a hardcoded Unsplash URL:
```
https://images.unsplash.com/photo-1542744095-0d53267d353e?w=1200&h=600...
```
This is an external dependency with no SLA. Unsplash can change or remove this image.

**Fix:** Add a local fallback image to `public/` and reference that instead.

### 14. No Privacy Policy or Terms of Service pages

The contact form collects name, email, phone, company. There is no `/privacy-policy` or `/terms` page linked anywhere. This is a legal exposure.

### 15. `favicon.svg.tsx` is a deprecated App Router pattern

The file exports a `Head()` component which is the Pages Router pattern. In App Router this file does nothing. The `<link rel="icon">` in `layout.tsx` is the correct way (already done there).

**Fix:** Delete `src/app/favicon.svg.tsx`.

### 16. `wrangler.toml` at project root creates platform ambiguity

The repo has both `netlify.toml` (active) and `wrangler.toml` (Cloudflare Pages config). The wrangler file is currently unused but could confuse CI/CD pipelines.

---

## PASSING — Confirmed Good

| Check | Status |
|-------|--------|
| TypeScript (`tsc --noEmit`) | ✅ 0 errors |
| ESLint (source files) | ✅ 0 warnings |
| 404 page (`out/404.html`) | ✅ exists |
| Netlify form handler (`public/__forms.html`) | ✅ wired correctly |
| JSON-LD LocalBusiness schema in root layout | ✅ present |
| Article + BreadcrumbList + FAQPage JSON-LD on blog posts | ✅ present |
| Mobile nav `aria-expanded` | ✅ correct |
| Cursor/background elements `aria-hidden="true"` | ✅ correct |
| Nav hamburger has `aria-label` | ✅ correct |
| Google Fonts `display: swap` | ✅ all three fonts |
| Sanity client graceful degradation | ✅ null-safe |
| Blog post Sanity retry logic | ✅ 3 retries with backoff |
| `robots.ts` — index: true, follow: true | ✅ correct |
| Next.js `<Image>` used on blog pages | ✅ correct |
| Geo meta tags (NH local SEO) | ✅ present |
| Root JSON-LD `openingHoursSpecification` | ✅ complete |
| `trailingSlash: true` in next.config | ✅ consistent with static export |

---

## Fix Priority Queue

| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 1 | Delete `public/robots.txt` + `public/sitemap.xml` | 2 min | 🔴 Critical |
| 2 | Unify all URLs to single canonical domain | 30 min | 🔴 Critical |
| 3 | Create `og-image.png` (1200×630) | 15 min | 🔴 Critical |
| 4 | Add security headers to `netlify.toml` | 10 min | 🟠 High |
| 5 | Fix ESLint ignores (`.netlify/`, `out/`) | 5 min | 🟠 High |
| 6 | Add OG + canonical to 10 service pages | 45 min | 🟠 High |
| 7 | Add `/studio/` to robots disallow | 2 min | 🟡 Medium |
| 8 | Fix blog fallback post logic | 10 min | 🟡 Medium |
| 9 | `cursor: none` → `@media (hover: hover)` | 5 min | 🟡 Medium |
| 10 | Delete dead files (`.cpy.html`, `Layout.tsx`, `favicon.svg.tsx`) | 5 min | 🟡 Medium |
| 11 | Dynamic import `PortableText` | 15 min | 🟡 Medium |
| 12 | Local fallback blog hero image | 10 min | 🟢 Low |
| 13 | Add Privacy Policy + Terms pages | 2 hrs | 🟢 Low |
