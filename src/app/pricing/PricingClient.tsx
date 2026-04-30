'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingClient() {
    const [isAnnual, setIsAnnual] = useState(true);

    const platformTiers = [
        {
            name: 'Starter',
            description: "Just getting started? This is your entry point. You get a chatbot that books appointments while you sleep, Google Business optimization so locals can find you, and automated review responses.",
            monthlyPrice: 297,
            annualPrice: 247,
            features: [
                'AI Chatbot Setup',
                'Google Business Optimization',
                'AI Review Response System',
                'Email support (48hr response)',
                'Basic analytics dashboard',
                '7-day free trial'
            ],
            cta: 'Start Free Trial',
            popular: false
        },
        {
            name: 'Professional',
            description: "Where most clients land. Everything in Starter, plus an AI phone receptionist, email sequences that sound human, regular social media posts, and ad copy that drives clicks.",
            monthlyPrice: 597,
            annualPrice: 497,
            features: [
                'Everything in Starter, plus:',
                'AI Voice Receptionist',
                'Email Automation Sequences',
                'Social Media Content (20 posts/mo)',
                'AI Ad Copy Optimization',
                'Priority support (24hr response)',
                'Weekly performance calls',
                'Custom integrations'
            ],
            cta: 'Start Free Trial',
            popular: true
        },
        {
            name: 'Enterprise',
            description: "The full package. We create your content, design your landing pages, build a complete sales funnel, train a custom AI for your business, and assign you a dedicated account manager.",
            monthlyPrice: 1297,
            annualPrice: 1097,
            features: [
                'Everything in Professional, plus:',
                'SEO Content Writing (4 articles/mo)',
                'Landing Page Creation (2/mo)',
                'Lead Magnet & Funnel Setup',
                'Custom AI model training',
                'Same-day priority support',
                'Bi-weekly strategy sessions',
                'White-glove onboarding',
                'Dedicated account manager'
            ],
            cta: 'Schedule Consultation',
            popular: false
        }
    ];

    const alaCarteServices = [
        { name: 'AI Chatbot', price: 'Starting at $149/mo', oneTime: false, setup: '$497 one-time setup', description: 'A bot that grabs leads while you sleep' },
        { name: 'AI Voice', price: 'Starting at $249/mo', oneTime: false, setup: '$497 one-time setup', description: 'Picks up so you never miss a call again' },
        { name: 'Google Business', price: 'Starting at $399 one-time', oneTime: true, setup: null, description: 'Get found on Maps—usually takes 3-7 days' },
        { name: 'Review Response', price: 'Starting at $99/mo', oneTime: false, setup: null, description: 'Replies to reviews without you lifting a finger' },
        { name: 'Email Automation', price: 'Starting at $49/mo', oneTime: false, setup: '$199 one-time setup', description: 'Follow-ups that actually get opened' },
        { name: 'Social Media', price: 'Starting at $299/mo', oneTime: false, setup: null, description: '20 posts a month so you stay visible' },
        { name: 'Ad Copy', price: 'Starting at $199/mo', oneTime: false, setup: '$299 one-time setup', description: 'Words that make people click' },
        { name: 'SEO Content', price: 'Starting at $149 per article', oneTime: true, setup: null, description: 'Long-form articles that rank on Google' },
        { name: 'Landing Pages', price: 'Starting at $799 one-time', oneTime: true, setup: null, description: 'Pages built to turn visitors into leads' },
        { name: 'Automated Sales Funnels', price: 'Starting at $299/mo', oneTime: false, setup: '$1,499 one-time setup', description: 'The whole funnel—soup to nuts' }
    ];

    const faqs = [
        {
            question: "What do I get in the free trial?",
            answer: "Full access to everything for 7 days. No credit card required, no catches. Try it out, and if it's not for you, walk away. Zero hassle."
        },
        {
            question: "Can you make it fit my business?",
            answer: "Everything is built specifically for your business. Chatbot scripts, emails, ads—none of it is copy-paste. We keep refining until it sounds like you."
        },
        {
            question: "What if I want to change plans?",
            answer: "Upgrade when you're ready to grow, downgrade during slower months. We adjust your billing accordingly. No fees, no hassle."
        },
        {
            question: "What if none of the plans are right for me?",
            answer: "We'll build a custom plan. Tell us what you need, and we'll put together a package that fits your situation."
        },
        {
            question: "How quickly will this actually work?",
            answer: "Depends on the service. Chatbots can start capturing leads on day one. SEO takes a few months to build momentum. Most clients see noticeable results within the first week or two."
        },
        {
            question: "Do I have to sign a long contract?",
            answer: "Month-to-month billing. If you want to cancel, give us 30 days notice. No long-term contracts, no traps."
        }
    ];

    const tableRows = [
        { feature: 'AI Chatbot', starter: true, pro: true, enterprise: true },
        { feature: 'AI Voice', starter: false, pro: true, enterprise: true },
        { feature: 'Google Business', starter: true, pro: true, enterprise: true },
        { feature: 'Review Response', starter: true, pro: true, enterprise: true },
        { feature: 'Email Automation', starter: false, pro: true, enterprise: true },
        { feature: 'Social Media', starter: false, pro: true, enterprise: true },
        { feature: 'Ad Copy', starter: false, pro: true, enterprise: true },
        { feature: 'SEO Content', starter: false, pro: false, enterprise: '4/mo' },
        { feature: 'Landing Pages', starter: false, pro: false, enterprise: '2/mo' },
        { feature: 'Automated Sales Funnels', starter: false, pro: false, enterprise: true },
        { feature: 'Custom Integrations', starter: false, pro: true, enterprise: true },
        { feature: 'Support Response Time', starter: '48hr', pro: '24hr', enterprise: 'Same day' },
        { feature: 'Strategy Calls', starter: false, pro: 'Weekly', enterprise: '2x/week' },
        { feature: 'Dedicated Manager', starter: false, pro: false, enterprise: true },
        { feature: 'Customization', starter: 'Standard', pro: 'Full', enterprise: 'Unlimited' },
    ] as Array<{ feature: string; starter: boolean | string; pro: boolean | string; enterprise: boolean | string }>;

    return (
        <>
            <Navbar />

            <header className="svc-hero">
                <div className="shell">
                    <div className="shape-meta fade-up">
                        <span className="num">SHAPE · 11</span>
                        <span className="bul">·</span>
                        <span>pricing</span>
                        <span className="bul">·</span>
                        <span>transparent</span>
                    </div>
                    <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
                        Straightforward Prices.<br />
                        <em>No Hidden Fees.</em>
                    </h1>
                    <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
                        No sneaky fees. No contracts locking you in. Everything&apos;s customizable&mdash;because that&apos;s how we do things.
                    </p>
                    <div className="fade-up" style={{ animationDelay: '0.18s', display: 'flex', alignItems: 'center', gap: '14px', marginTop: '32px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.04em', color: !isAnnual ? 'var(--amp-text)' : 'var(--amp-muted)' }}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            style={{
                                position: 'relative', width: '48px', height: '26px', borderRadius: '13px',
                                background: isAnnual ? 'var(--amp-primary)' : 'var(--line-strong)',
                                border: 'none', cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0
                            }}
                            aria-label="Toggle billing period"
                        >
                            <div style={{
                                position: 'absolute', top: '3px', width: '20px', height: '20px', borderRadius: '50%',
                                background: 'white', transition: 'transform 0.2s',
                                transform: isAnnual ? 'translateX(25px)' : 'translateX(3px)'
                            }} />
                        </button>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.04em', color: isAnnual ? 'var(--amp-text)' : 'var(--amp-muted)' }}>Annual</span>
                        {isAnnual && (
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.04em', padding: '3px 10px', border: '1px solid var(--amp-primary)', borderRadius: '12px', color: 'var(--amp-primary)' }}>Save 17%</span>
                        )}
                    </div>
                </div>
            </header>

            <section className="section tight section-rule">
                <div className="shell">
                    <span className="section-counter">01 / 04</span>
                    <div className="section-head" data-reveal>
                        <div className="eyebrow">platform plans · choose your level</div>
                        <h2>Pick Your<br />Plan.</h2>
                    </div>
                    <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'start', marginTop: '48px' }}>
                        {platformTiers.map((tier, idx) => (
                            <aside
                                key={idx}
                                className="price-card"
                                style={{
                                    position: 'relative',
                                    transform: tier.popular ? 'translateY(-8px)' : 'none',
                                    borderColor: tier.popular ? 'var(--amp-primary)' : undefined,
                                }}
                            >
                                {tier.popular && (
                                    <div style={{
                                        position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                                        background: 'var(--amp-primary)', color: 'white',
                                        fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em',
                                        padding: '4px 14px', borderRadius: '12px', whiteSpace: 'nowrap', textTransform: 'uppercase'
                                    }}>Most Popular</div>
                                )}
                                <div className="label">{tier.name.toLowerCase()} · plan</div>
                                <div className="price">
                                    from <em>${isAnnual ? tier.annualPrice : tier.monthlyPrice}</em>/mo
                                </div>
                                <div className="sub">{tier.description}</div>
                                {isAnnual && (
                                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-primary)', marginBottom: '16px', letterSpacing: '0.04em' }}>
                                        Billed annually (${(isAnnual ? tier.annualPrice : tier.monthlyPrice) * 12}/yr)
                                    </p>
                                )}
                                <ul className="checklist" style={{ marginBottom: '24px' }}>
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>→ {tier.cta}</Link>
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', textAlign: 'center', marginTop: '18px', letterSpacing: '0.04em' }}>try it free for 7 days.</p>
                            </aside>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section tight section-rule">
                <div className="shell">
                    <span className="section-counter">02 / 04</span>
                    <div className="section-head" data-reveal>
                        <div className="eyebrow">pick what you need · no bundle required</div>
                        <h2>Just Need<br />One Thing?</h2>
                    </div>
                    <p className="lede" data-reveal style={{ marginBottom: '40px' }}>
                        Not everyone needs the full package. Grab what makes sense for you. We can tweak any of these to fit.
                    </p>
                    <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1px', background: 'var(--line)', border: '1px solid var(--line)', marginBottom: '40px' }}>
                        {alaCarteServices.map((service, idx) => (
                            <div key={idx} style={{ padding: '24px', background: 'var(--amp-bg)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '8px' }}>
                                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: 'var(--amp-text)', lineHeight: 1.3 }}>{service.name}</span>
                                    {service.oneTime && (
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', padding: '2px 8px', border: '1px solid var(--line-strong)', color: 'var(--amp-muted)', whiteSpace: 'nowrap', flexShrink: 0 }}>one-time</span>
                                    )}
                                </div>
                                <p style={{ fontSize: '13px', color: 'var(--amp-muted)', marginBottom: '14px', lineHeight: 1.5 }}>{service.description}</p>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--amp-primary)', fontWeight: 700 }}>{service.price}</div>
                                {service.setup && (
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', marginTop: '4px', letterSpacing: '0.03em' }}>+ {service.setup}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center' }} data-reveal>
                        <Link href="/contact" className="btn btn-ghost">→ Get Custom Quote</Link>
                    </div>
                </div>
            </section>

            <section className="section tight section-rule">
                <div className="shell">
                    <span className="section-counter">03 / 04</span>
                    <div className="section-head" data-reveal>
                        <div className="eyebrow">plan breakdown · feature matrix</div>
                        <h2>What&apos;s in<br />Each Plan?</h2>
                    </div>
                    <p className="lede" data-reveal style={{ marginBottom: '40px' }}>Here&apos;s the breakdown so you know what you&apos;re getting.</p>
                    <div data-reveal style={{ overflowX: 'auto', border: '1px solid var(--line)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', minWidth: '560px' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                                    <th style={{ textAlign: 'left', padding: '16px 20px', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--amp-muted)', fontWeight: 500 }}>Feature</th>
                                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--amp-muted)', fontWeight: 500 }}>Starter</th>
                                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--amp-primary)', fontWeight: 700, background: 'rgba(99,102,241,0.04)' }}>Professional</th>
                                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--amp-muted)', fontWeight: 500 }}>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows.map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid var(--line)' }}>
                                        <td style={{ padding: '12px 20px', fontSize: '13px', color: 'var(--amp-text)' }}>{row.feature}</td>
                                        <td style={{ textAlign: 'center', padding: '12px 20px' }}>
                                            {typeof row.starter === 'boolean' ? (
                                                row.starter ? <CheckIcon /> : <XIcon />
                                            ) : <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--amp-muted)' }}>{row.starter}</span>}
                                        </td>
                                        <td style={{ textAlign: 'center', padding: '12px 20px', background: 'rgba(99,102,241,0.02)' }}>
                                            {typeof row.pro === 'boolean' ? (
                                                row.pro ? <CheckIcon /> : <XIcon />
                                            ) : <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--amp-primary)', fontWeight: 700 }}>{row.pro}</span>}
                                        </td>
                                        <td style={{ textAlign: 'center', padding: '12px 20px' }}>
                                            {typeof row.enterprise === 'boolean' ? (
                                                row.enterprise ? <CheckIcon /> : <XIcon />
                                            ) : <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--amp-muted)' }}>{row.enterprise}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="section tight section-rule">
                <div className="shell">
                    <span className="section-counter">04 / 04</span>
                    <div className="section-head" data-reveal>
                        <div className="eyebrow">straight answers</div>
                        <h2>Questions People<br />Usually Ask.</h2>
                    </div>
                    <div className="faqs" data-reveal>
                        {faqs.map((faq, idx) => (
                            <div className="faq" key={idx}>
                                <div className="num">{String(idx + 1).padStart(2, '0')}</div>
                                <div>
                                    <div className="q">{faq.question}</div>
                                    <p className="a">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="closing">
                <div className="shell">
                    <div className="section-head" data-reveal>
                        <div className="eyebrow">→ want to see if this actually works?</div>
                        <h2>7 Days Free.<br />No Card Required.</h2>
                        <p className="lede">7 days free. No card required. Walk away anytime if it&apos;s not your thing.</p>
                    </div>
                    <div className="closing-actions" data-reveal>
                        <Link href="/contact" className="btn btn-primary">→ Start Free Trial</Link>
                        <Link href="/contact" className="btn btn-ghost">← Book a Consultation</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

function CheckIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amp-primary)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}>
            <path d="M5 13l4 4L19 7" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--line-strong)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}>
            <path d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}
