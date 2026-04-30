'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_interest: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const body = new URLSearchParams();
            body.append('form-name', 'amp-marketing-contact');
            body.append('name', formData.name);
            body.append('email', formData.email);
            body.append('phone', formData.phone);
            body.append('company', formData.company);
            body.append('service_interest', formData.service_interest);
            body.append('message', formData.message);
            body.append('subject', `[AMP MARKETING] New Contact Form Submission from ${formData.name || 'visitor'}`);
            body.append('bot-field', '');

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body.toString(),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', phone: '', company: '', service_interest: '', message: '' });
            } else {
                throw new Error('Failed to submit');
            }
        } catch {
            alert('Something went wrong. Please try again or call us directly at 617-651-1457.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />

            <header className="svc-hero">
                <div className="shell">
                    <div className="shape-meta fade-up">
                        <span className="num">AMP MARKETING</span>
                        <span className="bul">·</span>
                        <span>contact</span>
                        <span className="bul">·</span>
                        <span>nashua, nh</span>
                    </div>
                    <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
                        Contact<br />
                        <em>Us.</em>
                    </h1>
                    <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
                        Do you have any questions? Are you interested in discussing your project? Please, send us a message and we will respond to you quickly—in most cases the same day.
                    </p>
                </div>
            </header>

            <section className="section tight section-rule">
                <div className="shell">
                    <span className="section-counter">01 / 01</span>
                    <div className="two-col" data-reveal>
                        <div>
                            <div className="section-head" style={{ marginBottom: '32px' }}>
                                <div className="eyebrow">drop us a line</div>
                                <h2>Send a Message.</h2>
                            </div>

                            {isSuccess ? (
                                <div style={{ border: '1px solid var(--line-strong)', padding: '40px', textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--amp-primary)', marginBottom: '16px', textTransform: 'uppercase' }}>→ message sent</div>
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--amp-text)', marginBottom: '12px' }}>Thanks for reaching out.</h3>
                                    <p style={{ color: 'var(--amp-muted)', marginBottom: '24px', lineHeight: 1.6 }}>We&apos;ll get back to you within 24 hours — usually the same day.</p>
                                    <button onClick={() => setIsSuccess(false)} className="btn btn-ghost">
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: 'var(--amp-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Your Name</label>
                                        <input type="text" name="name" required value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Smith"
                                            style={{ width: '100%', padding: '12px 16px', background: 'transparent', border: '1px solid var(--line-strong)', color: 'var(--amp-text)', fontFamily: 'var(--font-sans)', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: 'var(--amp-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Email Address</label>
                                        <input type="email" name="email" required value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@company.com"
                                            style={{ width: '100%', padding: '12px 16px', background: 'transparent', border: '1px solid var(--line-strong)', color: 'var(--amp-text)', fontFamily: 'var(--font-sans)', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: 'var(--amp-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Phone Number</label>
                                        <input type="tel" name="phone" value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="(555) 123-4567"
                                            style={{ width: '100%', padding: '12px 16px', background: 'transparent', border: '1px solid var(--line-strong)', color: 'var(--amp-text)', fontFamily: 'var(--font-sans)', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: 'var(--amp-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Company Name</label>
                                        <input type="text" name="company" value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            placeholder="Your Company LLC"
                                            style={{ width: '100%', padding: '12px 16px', background: 'transparent', border: '1px solid var(--line-strong)', color: 'var(--amp-text)', fontFamily: 'var(--font-sans)', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: 'var(--amp-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>What are you looking for?</label>
                                        <select name="service_interest" value={formData.service_interest}
                                            onChange={(e) => setFormData({ ...formData, service_interest: e.target.value })}
                                            style={{ width: '100%', padding: '12px 16px', background: 'var(--amp-bg)', border: '1px solid var(--line-strong)', color: formData.service_interest ? 'var(--amp-text)' : 'var(--amp-muted)', fontFamily: 'var(--font-sans)', fontSize: '15px', outline: 'none', boxSizing: 'border-box', appearance: 'none', cursor: 'pointer' }}>
                                            <option value="">Select a service...</option>
                                            <option value="ai-chatbot">AI Chatbot Setup</option>
                                            <option value="ai-voice">AI Voice Receptionist</option>
                                            <option value="google-business">Google Business Optimization</option>
                                            <option value="review-response">AI Review Response</option>
                                            <option value="email-automation">Email Automation</option>
                                            <option value="social-media">Social Media Content</option>
                                            <option value="ad-copy">AI Ad Copy</option>
                                            <option value="seo-content">SEO Content Writing</option>
                                            <option value="landing-pages">Landing Page Creation</option>
                                            <option value="lead-funnel">Lead Magnet &amp; Funnel</option>
                                            <option value="multiple">Multiple Services</option>
                                            <option value="other">Something Else</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: 'var(--amp-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>What&apos;s on your mind?</label>
                                        <textarea name="message" rows={4} value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="What are you hoping to fix or improve? What's getting in the way?"
                                            style={{ width: '100%', padding: '12px 16px', background: 'transparent', border: '1px solid var(--line-strong)', color: 'var(--amp-text)', fontFamily: 'var(--font-sans)', fontSize: '15px', outline: 'none', resize: 'none', boxSizing: 'border-box' }} />
                                    </div>
                                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ opacity: isSubmitting ? 0.5 : 1 }}>
                                        {isSubmitting ? 'Sending...' : '→ Send Message'}
                                    </button>
                                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', letterSpacing: '0.04em', textAlign: 'center' }}>Most times, we respond within 24 hours.</p>
                                </form>
                            )}
                        </div>

                        <aside>
                            <div className="price-card" style={{ marginBottom: '24px' }}>
                                <div className="label">other ways to reach us</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '8px' }}>
                                    {[
                                        { label: 'Stop by', detail: '74 Northeastern Blvd #12a Ste 101\nNashua, NH 03062' },
                                        { label: 'Email us', detail: 'hello@ampmarketing.io' },
                                        { label: 'Call us', detail: '617-651-1457' },
                                    ].map((item) => (
                                        <div key={item.label}>
                                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--amp-primary)', marginBottom: '6px', textTransform: 'uppercase' }}>→ {item.label}</div>
                                            <p style={{ color: 'var(--amp-muted)', fontSize: '14px', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{item.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="price-card">
                                <div className="label">when we&apos;re around</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                                    {[
                                        { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM EST' },
                                        { day: 'Saturday', hours: '10:00 AM – 2:00 PM EST' },
                                        { day: 'Sunday', hours: 'Closed' },
                                    ].map((row) => (
                                        <div key={row.day} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '10px' }}>
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-muted)' }}>{row.day}</span>
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-text)' }}>{row.hours}</span>
                                        </div>
                                    ))}
                                </div>
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', letterSpacing: '0.04em', marginTop: '20px' }}>
                                    15 minutes, no pressure. we&apos;ll discuss your goals and see if we&apos;re the right fit.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
