import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getPosts, urlFor } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import type { Metadata } from 'next';

const SITE_URL = 'https://ampmarketing-io-enhanced-ux.netlify.app';
const SITE_NAME = 'AMP Marketing';
const ORG_LOGO = `${SITE_URL}/logo.png`;

type PortableImage = { asset: { _ref: string }; alt?: string };
type PortableLink = { href?: string };
type PortableInternalLink = { path?: string };

type SanityImageRef = {
  asset?: { _ref?: string; _type?: string };
  hotspot?: unknown;
  crop?: unknown;
} | null | undefined;

type Faq = { question: string; answer: string };

type RelatedService = {
  _id: string;
  title: string;
  path: string;
  shortDescription?: string;
  icon?: string;
};

type PostShape = {
  _id: string;
  _updatedAt?: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: SanityImageRef;
  body?: unknown[];
  publishedAt?: string;
  readTime?: number;
  category?: { title?: string; slug?: { current: string } } | null;
  author?: { name?: string; image?: SanityImageRef; bio?: string } | null;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
    canonicalUrl?: string;
    ogImage?: SanityImageRef;
    noIndex?: boolean;
  };
  faqs?: Faq[];
  aiAudit?: { score?: number; status?: string; lastChecked?: string };
  relatedServices?: RelatedService[];
  gallery?: Array<{ asset: { _ref?: string }; alt: string; caption?: string }>;
};

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    if (posts && posts.length > 0) {
      return posts.map((post: { slug: { current: string } }) => ({
        slug: post.slug.current,
      }));
    }
  } catch {}
  return [{ slug: 'placeholder' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = (await getPost(slug)) as PostShape | null;
    if (!post) return { title: 'Post Not Found' };

    const seo = post.seo || {};
    const title = seo.metaTitle || post.title;
    const description = seo.metaDescription || post.excerpt || '';
    const url =
      seo.canonicalUrl || `${SITE_URL}/blog/${post.slug.current}/`;
    const ogImageRef = seo.ogImage || post.mainImage;
    const ogImageUrl = ogImageRef
      ? urlFor(ogImageRef).width(1200).height(630).url()
      : undefined;

    return {
      title,
      description,
      keywords:
        seo.metaKeywords && seo.metaKeywords.length > 0
          ? seo.metaKeywords
          : undefined,
      alternates: { canonical: url },
      robots: seo.noIndex ? { index: false, follow: false } : undefined,
      openGraph: {
        type: 'article',
        title,
        description,
        url,
        siteName: SITE_NAME,
        publishedTime: post.publishedAt,
        modifiedTime: post._updatedAt,
        authors: post.author?.name ? [post.author.name] : undefined,
        images: ogImageUrl
          ? [{ url: ogImageUrl, width: 1200, height: 630 }]
          : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ogImageUrl ? [ogImageUrl] : undefined,
      },
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: PortableImage }) => (
      <div style={{ margin: '2rem 0', overflow: 'hidden', border: '1px solid var(--line)' }}>
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={400}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--amp-text)', marginTop: '3rem', marginBottom: '1.25rem', lineHeight: 1.2 }}>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--amp-text)', marginTop: '2rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p style={{ color: 'var(--amp-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '15px' }}>{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote style={{ borderLeft: '2px solid var(--amp-primary)', paddingLeft: '1.5rem', margin: '2rem 0', color: 'var(--amp-muted)', fontStyle: 'italic', fontSize: '16px' }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--amp-muted)', lineHeight: 1.8, listStyleType: 'disc' }}>
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--amp-muted)', lineHeight: 1.8, listStyleType: 'decimal' }}>
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong style={{ fontWeight: 700, color: 'var(--amp-text)' }}>{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em style={{ fontStyle: 'italic' }}>{children}</em>
    ),
    link: ({
      value,
      children,
    }: {
      value?: PortableLink;
      children?: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        style={{ color: 'var(--amp-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    internalLink: ({
      value,
      children,
    }: {
      value?: PortableInternalLink;
      children?: React.ReactNode;
    }) => (
      <Link
        href={value?.path || '#'}
        style={{ color: 'var(--amp-primary)', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 500 }}
      >
        {children}
      </Link>
    ),
  },
};

function buildJsonLd(post: PostShape) {
  const url =
    post.seo?.canonicalUrl || `${SITE_URL}/blog/${post.slug.current}/`;
  const imageRef = post.seo?.ogImage || post.mainImage;
  const imageUrl = imageRef
    ? urlFor(imageRef).width(1200).height(630).url()
    : undefined;

  const article: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    author: post.author?.name
      ? { '@type': 'Person', name: post.author.name }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: ORG_LOGO },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: SITE_URL + '/blog/',
      },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const faqs =
    post.faqs && post.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  return [article, breadcrumbs, faqs].filter(Boolean) as Record<
    string,
    unknown
  >[];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: PostShape | null = null;
  try {
    post = (await getPost(slug)) as PostShape | null;
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const jsonLd = buildJsonLd(post);

  return (
    <>
      <Navbar />

      {jsonLd.map((blob, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blob) }}
        />
      ))}

      <article>
        <header className="svc-hero" style={{ paddingBottom: '0' }}>
          <div className="shell">
            <Link
              href="/blog"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.08em', color: 'var(--amp-primary)', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}
            >
              ← Back to Blog
            </Link>
            {post.category?.title && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--amp-primary)', textTransform: 'uppercase', marginBottom: '16px' }}>
                {post.category.title}
              </div>
            )}
            <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
              {post.title}
            </h1>
            <div className="fade-up" style={{ animationDelay: '0.1s', display: 'flex', alignItems: 'center', gap: '24px', marginTop: '16px' }}>
              {post.publishedAt && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-muted)', letterSpacing: '0.04em' }}>{new Date(post.publishedAt).toLocaleDateString()}</span>
              )}
              {post.readTime && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-muted)', letterSpacing: '0.04em' }}>{post.readTime} min read</span>
              )}
              {post.author?.name && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-muted)', letterSpacing: '0.04em' }}>{post.author.name}</span>
              )}
            </div>
          </div>
        </header>

        <section style={{ padding: '0 0 var(--space-8)' }}>
          <div className="shell" style={{ paddingTop: 'var(--space-8)' }}>
            <div style={{ overflow: 'hidden', border: '1px solid var(--line)' }}>
              {post.mainImage ? (
                <Image
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.title}
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              ) : (
                <Image
                  src="https://images.unsplash.com/photo-1542744095-0d53267d353e?w=1200&h=600&fit=crop&auto=format&q=75"
                  alt={post.title}
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              )}
            </div>
          </div>
        </section>

        <section style={{ padding: 'var(--space-8) 0' }}>
          <div className="shell" style={{ maxWidth: '780px' }}>
            {post.excerpt && (
              <p style={{ fontSize: '18px', color: 'var(--amp-text)', lineHeight: 1.75, marginBottom: '2rem', fontWeight: 500, borderLeft: '2px solid var(--amp-primary)', paddingLeft: '1.5rem' }}>
                {post.excerpt}
              </p>
            )}
            {post.body && (
              <PortableText
                value={post.body as never}
                components={portableTextComponents}
              />
            )}
          </div>
        </section>

        {post.gallery && post.gallery.length > 0 && (
          <section style={{ padding: 'var(--space-8) 0', borderTop: '1px solid var(--line)' }}>
            <div className="shell">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--amp-text)', marginBottom: '2rem' }}>Gallery</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '16px' }}>
                {post.gallery.map((img, i) => (
                  <figure key={i} style={{ margin: 0, overflow: 'hidden', border: '1px solid var(--line)' }}>
                    <Image
                      src={urlFor(img).width(800).height(600).url()}
                      alt={img.alt || 'Gallery image'}
                      width={800}
                      height={600}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    {img.caption && (
                      <figcaption style={{ padding: '12px 16px', fontSize: '12px', color: 'var(--amp-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.03em' }}>
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {post.faqs && post.faqs.length > 0 && (
          <section style={{ padding: 'var(--space-8) 0', borderTop: '1px solid var(--line)' }}>
            <div className="shell" style={{ maxWidth: '780px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--amp-text)', marginBottom: '2rem' }}>
                Frequently Asked Questions
              </h2>
              <div className="faqs">
                {post.faqs.map((faq, i) => (
                  <div className="faq" key={i}>
                    <div className="num">{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <div className="q">{faq.question}</div>
                      <p className="a">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {post.relatedServices && post.relatedServices.length > 0 && (
          <section style={{ padding: 'var(--space-8) 0', borderTop: '1px solid var(--line)' }}>
            <div className="shell">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--amp-text)', marginBottom: '2rem' }}>
                Related Services
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {post.relatedServices.map((s) => (
                  <Link
                    key={s._id}
                    href={s.path}
                    style={{ display: 'block', padding: '24px', border: '1px solid var(--line)', textDecoration: 'none', transition: 'border-color 0.2s' }}
                  >
                    {s.icon && <div style={{ fontSize: '28px', marginBottom: '12px' }}>{s.icon}</div>}
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--amp-text)', marginBottom: '8px' }}>
                      {s.title}
                    </h3>
                    {s.shortDescription && (
                      <p style={{ fontSize: '13px', color: 'var(--amp-muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                        {s.shortDescription}
                      </p>
                    )}
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <section className="closing">
        <div className="shell">
          <div className="section-head" data-reveal>
            <div className="eyebrow">→ ready to get results?</div>
            <h2>Let&apos;s Put AI<br />to Work for You.</h2>
            <p className="lede">Let&apos;s help you implement AI-powered marketing that actually works.</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ Book a Free Call</Link>
            <Link href="/blog" className="btn btn-ghost">← Back to Blog</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
