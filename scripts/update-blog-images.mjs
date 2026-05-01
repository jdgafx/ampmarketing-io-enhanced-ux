/**
 * Updates Sanity blog post mainImages with topically relevant Unsplash photos.
 * Run: node scripts/update-blog-images.mjs
 */
import https from 'https';
import { createClient } from 'next-sanity';

const PROJECT_ID = '36hj0d6k';
const DATASET = 'ampmarketing';
const TOKEN = 'skSbPKVqdl6arMHUb9TOTsoJpizN3WYWRRB3pUObirZh573DJXe4IiJsRUBC6s3l283DM33J9LnFjqqSQl71O7Yh345X1q6WRefAtDGPaeY0YRVEI3TxOysqOPy29NqGoje5jNgOn4mJmHl1Mu5hGJrYCFdxN77T9wwxPtUEiVWikjjB5Wjs';

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: TOKEN,
});

// Visually verified correct images for each post slug
const SLUG_IMAGE_MAP = {
  'online-reviews-worth-more-than-ads-how-to-get-more':
    '1599658880436-c61792e70672', // MacBook with Google Analytics dashboard
  'social-media-content-system-without-burnout':
    '1611162617213-7d7a39e9b1d7', // Social media app icons on smartphone
  'build-lead-funnel-that-qualifies-itself':
    '1551288049-bebda4e38f71',     // Analytics dashboard on dual monitors
  '7-elements-high-converting-landing-page':
    '1467232004584-a241de8bcf5d', // Web designer at laptop (landing page design)
  'ad-copy-that-stops-the-scroll-2025':
    '1611532736597-de2d4265fba3', // Typography/letter A on tablet (copywriting)
  // email-sequences: envelopes image is correct — skip
  'google-business-profile-free-marketing-tool-2025':
    '1573804633927-bfcbcd909acd', // Google search interface on laptop
  'google-ads-2025-manual-bidding-costing-you-money':
    '1460925895917-afdab827c52f', // Business analytics on laptop
  'ai-voice-agent-convert-leads-without-cold-calls':
    '1531746790731-6c087fecd65a', // AI/robot hand (artificial agent)
  'why-every-small-business-needs-an-ai-chatbot-2025':
    '1677442135703-1787eea5ce01', // AI neural network visualization
};

function fetchImageBuffer(unsplashId) {
  return new Promise((resolve, reject) => {
    const url = `https://images.unsplash.com/photo-${unsplashId}?w=1200&h=630&fit=crop&auto=format&q=80`;
    https.get(url, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve({ buffer: Buffer.concat(chunks), contentType: res.headers['content-type'] || 'image/jpeg' }));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function uploadImageToSanity(buffer, contentType, filename) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: `${PROJECT_ID}.api.sanity.io`,
      path: `/v2021-06-07/assets/images/${DATASET}?filename=${filename}`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': contentType,
        'Content-Length': buffer.length,
      },
    };
    const req = https.request(options, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        try {
          const body = JSON.parse(Buffer.concat(chunks).toString());
          if (body.document?._id) resolve(body.document._id);
          else reject(new Error(`Upload failed: ${JSON.stringify(body)}`));
        } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

async function patchPostImage(postId, assetId) {
  return client.patch(postId).set({
    mainImage: {
      _type: 'image',
      asset: { _type: 'reference', _ref: assetId },
    },
  }).commit();
}

async function main() {
  // Fetch all posts
  const posts = await client.fetch(
    `*[_type == "post" && defined(slug.current)] { _id, title, slug }`
  );

  for (const post of posts) {
    const slug = post.slug.current;
    const unsplashId = SLUG_IMAGE_MAP[slug];
    if (!unsplashId) {
      console.log(`  SKIP  ${slug} (no change needed)`);
      continue;
    }

    console.log(`UPDATE  ${slug}`);
    try {
      const { buffer, contentType } = await fetchImageBuffer(unsplashId);
      const assetId = await uploadImageToSanity(buffer, contentType, `${slug}.jpg`);
      await patchPostImage(post._id, assetId);
      console.log(`    ✓   asset=${assetId}`);
    } catch (err) {
      console.error(`    ✗   ${err.message}`);
    }
  }

  console.log('\nDone.');
}

main().catch(console.error);
