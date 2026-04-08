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
            // Netlify Forms: POST form-urlencoded to site root with form-name.
            // Form shape is declared in public/__forms.html so Netlify's build-time
            // scanner registers it (JSX forms from static export are invisible to it).
            // The `subject` field is picked up by Netlify as the email subject line,
            // tagging all AMP Marketing leads distinctly from the PME clone site.
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
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    service_interest: '',
                    message: '',
                });
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            alert('Something went wrong. Please try again or call us directly at 617-651-1457.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-transparent font-poppins text-gray-200">
            <Navbar />

            <section className="bg-transparent py-24 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">Contact Us</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Do you have any questions? Are you interested in discussing your project? Please, send us a message and we will respond to you quickly—in most cases the same day.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white/5 rounded-3xl p-10 shadow-xl border border-white/10 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-6">Drop Us a Line</h2>
                            {isSuccess ? (
                                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                                    <div className="text-5xl mb-4">✅</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-300">Thanks for reaching out. We&apos;ll get back to you within 24 hours — usually the same day.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-6 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-600"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-600"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-600"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-600"
                                            placeholder="Your Company LLC"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2">What are you looking for?</label>
                                        <select
                                            name="service_interest"
                                            value={formData.service_interest}
                                            onChange={(e) => setFormData({ ...formData, service_interest: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-slate-900">Select a service...</option>
                                            <option value="ai-chatbot" className="bg-slate-900">AI Chatbot Setup</option>
                                            <option value="ai-voice" className="bg-slate-900">AI Voice Receptionist</option>
                                            <option value="google-business" className="bg-slate-900">Google Business Optimization</option>
                                            <option value="review-response" className="bg-slate-900">AI Review Response</option>
                                            <option value="email-automation" className="bg-slate-900">Email Automation</option>
                                            <option value="social-media" className="bg-slate-900">Social Media Content</option>
                                            <option value="ad-copy" className="bg-slate-900">AI Ad Copy</option>
                                            <option value="seo-content" className="bg-slate-900">SEO Content Writing</option>
                                            <option value="landing-pages" className="bg-slate-900">Landing Page Creation</option>
                                            <option value="lead-funnel" className="bg-slate-900">Lead Magnet & Funnel</option>
                                            <option value="multiple" className="bg-slate-900">Multiple Services</option>
                                            <option value="other" className="bg-slate-900">Something Else</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2">What&apos;s on your mind?</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none placeholder:text-gray-600"
                                            placeholder="What are you hoping to fix or improve? What's getting in the way?"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                    <p className="text-xs text-gray-500 text-center">Most times, we respond within 24 hours.</p>
                                </form>
                            )}
                        </div>
                        <div className="space-y-8">
                            <div className="bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-sm">
                                <h2 className="text-2xl font-bold text-white mb-6">Other Ways to Reach Us</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                            <span className="text-2xl">📍</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">Stop by</p>
                                            <p className="text-gray-400">74 Northeastern Blvd #12a Ste 101<br />Nashua, NH 03062</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                            <span className="text-2xl">📧</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">Email us</p>
                                            <p className="text-gray-400">hello@ampmarketing.io</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                            <span className="text-2xl">📞</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">Call us</p>
                                            <p className="text-gray-400">617-651-1457</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl p-10 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Let&apos;s Talk</h3>
                                <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                                    15 minutes for free. Tell us what is your problem. You won&apos;t get pressured or pitched here — only a real conversation on whether we could be the right people to help you.
                                </p>
                                <a href="mailto:michael@primemarketingexperts.com" className="relative z-10 block w-full bg-white text-black text-center py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-[1.02] shadow-xl shadow-white/10">
                                    Email Us
                                </a>
                            </div>
                            <div className="bg-black/40 rounded-3xl p-10 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-4">When We&apos;re Around</h3>
                                <div className="space-y-3 text-gray-400">
                                    <p className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span><span className="text-white">9:00 AM - 6:00 PM EST</span></p>
                                    <p className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span><span className="text-white">10:00 AM - 2:00 PM EST</span></p>
                                    <p className="flex justify-between"><span>Sunday</span><span className="text-white font-semibold text-violet-500">Closed</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
