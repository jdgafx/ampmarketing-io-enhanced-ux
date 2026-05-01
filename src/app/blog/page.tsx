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
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format&q=75',
        url: 'https://www.hubspot.com/state-of-marketing'
    },
    {
        title: 'Choosing the Best AI Sales Agents for Your Business',
        excerpt: 'Most chatbots are terrible. These ones are not. A breakdown of which sales agents are actually booking meetings for people.',
        category: 'Technology',
        publishedAt: '2025-01-20',
        readTime: 10,
        slug: { current: '' },
        heroImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop&auto=format&q=75',
        url: 'https://www.ruh.ai/blogs/best-ai-sales-agents-for-business'
    },
    {
        title: 'Top AI Lead Generation Software to Watch in 2025',
        excerpt: 'Side-by-side look at the lead gen tools people are talking about. What they cost, what they do, which ones are worth your money.',
        category: 'Tools',
        publishedAt: '2025-01-10',
        readTime: 8,
        slug: { current: '' },
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format&q=75',
        url: 'https://fr.dorik.com/blog/best-ai-lead-generation-software'
    },
    {
        title: 'Automating Lead Generation with Intelligent Workflows',
        excerpt: 'How to wire up your forms so leads go straight into your CRM and get follow-up emails without you lifting a finger.',
        category: 'Automation',
        publishedAt: '2025-01-05',
        readTime: 9,
        slug: { current: '' },
        heroImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop&auto=format&q=75',
        url: 'https://heyform.net/blog/the-ultimate-guide-to-heyform-zapier-integration-automate-lead-generation-in-2025/'
    },
    {
        title: 'How Top Sales Teams are Using AI to Win',
        excerpt: 'Stories from actual sales teams who figured out how to spend less time on busywork and more time closing.',
        category: 'Sales',
        publishedAt: '2024-12-28',
        readTime: 7,
        slug: { current: '' },
        heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=75',
        url: 'https://www.linkedin.com/pulse/5-ways-top-sales-reps-used-ai-crush-2025-goals-what-you-fairchild-b6nme'
    }
];

function getPostImageUrl(title: string, category: string): string {
  const text = (title + ' ' + category).toLowerCase();
  if (/chatbot|ai agent|sales agent|conversational ai/.test(text))
    return 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=400&fit=crop&auto=format&q=75';
  if (/voice|phone|call center|receptionist/.test(text))
    return 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop&auto=format&q=75';
  if (/lead gen|lead generation|funnel|leads/.test(text))
    return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format&q=75';
  if (/email|follow.?up|sequence|newsletter|drip|deliverability/.test(text))
    return 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=400&fit=crop&auto=format&q=75';
  if (/\bseo\b|search engine optim|link build|organic search|keyword rank/.test(text))
    return 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=400&fit=crop&auto=format&q=75';
  if (/social media|instagram|facebook|tiktok|linkedin post|followers|engagement/.test(text))
    return 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=400&fit=crop&auto=format&q=75';
  if (/\bad\b|ppc|bing ads|google ads|paid search|advertising|search engine ad/.test(text))
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format&q=75';
  if (/review|reputation|rating|star/.test(text))
    return 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&h=400&fit=crop&auto=format&q=75';
  if (/automat|workflow|zapier|integration|crm/.test(text))
    return 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop&auto=format&q=75';
  if (/sales|pipeline|deal|close|win|productivity/.test(text))
    return 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=75';
  if (/report|analytics|data|metric|stat/.test(text))
    return 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=400&fit=crop&auto=format&q=75';
  if (/website|web design|landing page|accessibility|compliance/.test(text))
    return 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop&auto=format&q=75';
  if (/content|strategy|inbound|digital marketing|martech/.test(text))
    return 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop&auto=format&q=75';
  if (/ai|artificial intelligence|machine learning|tool/.test(text))
    return 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=400&fit=crop&auto=format&q=75';
  return 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&auto=format&q=75';
}

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
            ? sanityPosts
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
                                            <Image
                                                src={getPostImageUrl(post.title, post.category || '')}
                                                alt={post.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="(max-width: 768px) 100vw, 400px"
                                            />
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
