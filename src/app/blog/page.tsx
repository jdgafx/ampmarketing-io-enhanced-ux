import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getPosts, urlFor } from '@/sanity/lib/client';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Blog | AI Tips, Lead Generation Strategies & Growth Guides",
  description: "Expert articles on AI marketing, automated lead generation, chatbot strategies, SEO, and small business growth. Practical advice from the AMP Marketing team.",
  keywords: ["marketing blog", "AI marketing tips", "lead generation strategies", "small business growth blog", "chatbot marketing", "SEO content strategy", "email marketing tips", "digital marketing insights", "AI marketing articles", "business automation blog", "Bing Ads tips", "Google Ads strategies", "marketing automation guides"],
  openGraph: {
    title: "AMP Marketing Blog | AI Marketing Tips & Growth Strategies",
    description: "Practical marketing advice for small businesses. Learn about AI chatbots, lead generation, SEO, and more.",
    url: "https://ampmarketing-io-enhanced-ux.netlify.app/blog",
  },
};

const fallbackPosts = [
    {
        title: '2025 State of Marketing Report: The AI Revolution',
        excerpt: 'HubSpot put together their annual marketing report. Lots of data on what tools actually work and which trends are worth paying attention to.',
        category: 'Marketing',
        publishedAt: '2025-01-25',
        readTime: 12,
        slug: { current: '' },
        url: 'https://www.hubspot.com/state-of-marketing'
    },
    {
        title: 'Choosing the Best AI Sales Agents for Your Business',
        excerpt: 'Most chatbots are terrible. These ones are not. A breakdown of which sales agents are actually booking meetings for people.',
        category: 'Technology',
        publishedAt: '2025-01-20',
        readTime: 10,
        slug: { current: '' },
        url: 'https://www.ruh.ai/blogs/best-ai-sales-agents-for-business'
    },
    {
        title: 'Top AI Lead Generation Software to Watch in 2025',
        excerpt: 'Side-by-side look at the lead gen tools people are talking about. What they cost, what they do, which ones are worth your money.',
        category: 'Tools',
        publishedAt: '2025-01-10',
        readTime: 8,
        slug: { current: '' },
        url: 'https://fr.dorik.com/blog/best-ai-lead-generation-software'
    },
    {
        title: 'Automating Lead Generation with Intelligent Workflows',
        excerpt: 'How to wire up your forms so leads go straight into your CRM and get follow-up emails without you lifting a finger.',
        category: 'Automation',
        publishedAt: '2025-01-05',
        readTime: 9,
        slug: { current: '' },
        url: 'https://heyform.net/blog/the-ultimate-guide-to-heyform-zapier-integration-automate-lead-generation-in-2025/'
    },
    {
        title: 'How Top Sales Teams are Using AI to Win',
        excerpt: 'Stories from actual sales teams who figured out how to spend less time on busywork and more time closing.',
        category: 'Sales',
        publishedAt: '2024-12-28',
        readTime: 7,
        slug: { current: '' },
        url: 'https://www.linkedin.com/pulse/5-ways-top-sales-reps-used-ai-crush-2025-goals-what-you-fairchild-b6nme'
    }
];

const gradients = [
    'linear-gradient(135deg, #3b82f6, #4f46e5)',
    'linear-gradient(135deg, #10b981, #0d9488)',
    'linear-gradient(135deg, #f59e0b, #ea580c)',
    'linear-gradient(135deg, #ef4444, #ec4899)',
    'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    'linear-gradient(135deg, #06b6d4, #3b82f6)',
];

interface Post {
    _id?: string;
    title: string;
    excerpt: string;
    category: string;
    publishedAt: string;
    readTime: number;
    slug: { current: string };
    mainImage?: { asset: { _ref: string } };
    heroImage?: string;
    url?: string;
}

export default async function BlogPage() {
    let posts: Post[] = [];

    try {
        const sanityPosts = await getPosts();
        posts = sanityPosts && sanityPosts.length > 0
            ? [...sanityPosts, ...fallbackPosts]
            : [...fallbackPosts];
    } catch {
        posts = [...fallbackPosts];
    }

    return (
        <>
            <Navbar />

            <header className="svc-hero">
                <div className="shell">
                    <div className="shape-meta fade-up">
                        <span className="num">SHAPE · 12</span>
                        <span className="bul">·</span>
                        <span>blog</span>
                        <span className="bul">·</span>
                        <span>no-fluff</span>
                    </div>
                    <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
                        What We&apos;re<br />
                        <em>Reading.</em>
                    </h1>
                    <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
                        Articles we found useful about getting more leads and growing your business. No fluff.
                    </p>
                </div>
            </header>

            <section className="section tight section-rule">
                <div className="shell">
                    <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
                        {posts.map((post, idx) => {
                            const isExternal = 'url' in post && post.url;
                            const href = isExternal ? post.url! : `/blog/${post.slug.current}`;
                            const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

                            return (
                                <Link
                                    key={post._id || idx}
                                    href={href}
                                    {...linkProps}
                                    style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', border: '1px solid var(--line)', transition: 'border-color 0.2s' }}
                                    className="blog-card"
                                >
                                    <div style={{
                                        height: '180px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        background: gradients[idx % gradients.length],
                                        borderBottom: '1px solid var(--line)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {post.heroImage ? (
                                            <Image
                                                src={post.heroImage}
                                                alt={post.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="(max-width: 768px) 100vw, 400px"
                                            />
                                        ) : post.mainImage ? (
                                            <Image
                                                src={urlFor(post.mainImage).width(400).height(180).url()}
                                                alt={post.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="(max-width: 768px) 100vw, 400px"
                                            />
                                        ) : (
                                            <span style={{ fontSize: '48px', opacity: 0.25 }}>📄</span>
                                        )}
                                    </div>
                                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--amp-primary)', textTransform: 'uppercase', marginBottom: '10px' }}>{post.category}</div>
                                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--amp-text)', lineHeight: 1.35, marginBottom: '12px' }}>{post.title}</h3>
                                        <p style={{ fontSize: '13px', color: 'var(--amp-muted)', lineHeight: 1.65, flexGrow: 1, marginBottom: '16px' }}>{post.excerpt}</p>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', letterSpacing: '0.04em' }}>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', letterSpacing: '0.04em' }}>{post.readTime} min read</span>
                                        </div>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-primary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                                            Read Article →
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="closing">
                <div className="shell">
                    <div className="section-head" data-reveal>
                        <div className="eyebrow">→ want to talk shop?</div>
                        <h2>Let&apos;s See If<br />We Can Help.</h2>
                        <p className="lede">We help businesses get more leads without all the headaches. Curious if we can help you? Let&apos;s chat.</p>
                    </div>
                    <div className="closing-actions" data-reveal>
                        <Link href="/contact" className="btn btn-primary">→ Book a Free Call</Link>
                        <Link href="/pricing" className="btn btn-ghost">← View Pricing</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
