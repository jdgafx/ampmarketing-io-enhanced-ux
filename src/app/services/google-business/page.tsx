import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization",
  description: "Get found in Google's local map pack. We optimize your Business Profile so nearby customers call you first.",
  keywords: ["Google Business Profile optimization", "local SEO services", "Google Maps ranking", "local map pack optimization", "Google Business listing management", "local search optimization", "GMB optimization service", "local business marketing", "get found on Google Maps", "Google Business Profile agency", "local SEO Nashua NH", "Bing Places optimization", "improve local search ranking", "Google Business reviews management", "rank higher on Google Maps"],
  openGraph: {
    title: "Google Business Profile Optimization | AMP Marketing",
    description: "Get found in Google's local map pack. We optimize your Business Profile so nearby customers call you first.",
    url: "https://ampmarketing-io-enhanced-ux.netlify.app/services/google-business",
    type: "website",
  },
  alternates: {
    canonical: "https://ampmarketing-io-enhanced-ux.netlify.app/services/google-business",
  },
};

const faqs = [
  { q: "How long until I show up in searches?", a: "Most businesses see initial improvements within 3-7 days. The bigger gains come when you start appearing in the map pack, which typically happens within a month." },
  { q: "Do I need to give you new photos?", a: "Not unless your current ones need replacing. We work with what you have and advise on what would help. If your photos are solid, we use them." },
  { q: "What if my profile already exists?", a: "That's ideal. Most existing profiles are only about 60% complete. We fill in the gaps and optimize everything that's already there." },
  { q: "Is this a monthly thing?", a: "One-time setup. We optimize it, hand it back, and you're done. If you want ongoing management later, we can discuss that—but there's no pressure." },
];

export default function GoogleBusinessPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 09</span>
            <span className="bul">·</span>
            <span>google-business</span>
            <span className="bul">·</span>
            <span>local-seo</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            Local Search<br />
            <em>Mastery.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            If you&apos;re not in the top 3 of Google&apos;s map pack, your competitors are getting those calls. Most business profiles are incomplete or poorly optimized. We fix that so local customers find you and pick up the phone.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>2 days</dd></div>
            <div><dt>best for</dt><dd>local discovery</dd></div>
            <div><dt>engine</dt><dd>optimize · rank · track</dd></div>
            <div><dt>handoff</dt><dd>profile · photos · reporting</dd></div>
          </dl>
        </div>
      </header>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>Visible to Local<br />Customers.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>Most Google Business profiles are only half-finished. That&apos;s money going straight to your competitors. We optimize every detail of your profile so you rank higher in local search results.</p>
              <ul className="checklist">
                <li>Keyword research to find the exact terms your local customers are searching for.</li>
                <li>Updated, high-quality photos that make a strong first impression.</li>
                <li>Accurate categories so Google shows your business for the right searches.</li>
                <li>Q&amp;A section filled with the questions customers ask most, along with clear answers.</li>
                <li>Professional responses to every review—positive and negative.</li>
                <li>Tracking setup so you can see exactly how many calls and website visits your profile drives.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price"><em>$399</em> one-time</div>
              <div className="sub">Complete optimization and 30 days of ranking tweaking.</div>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>→ get started today</Link>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', textAlign: 'center', marginTop: '18px', letterSpacing: '0.04em' }}>one-time fee. no monthly retainer required.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">02 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">straight answers</div>
            <h2>Common<br />Questions.</h2>
          </div>
          <div className="faqs" data-reveal>
            {faqs.map((faq, idx) => (
              <div className="faq" key={idx}>
                <div className="num">{String(idx + 1).padStart(2, '0')}</div>
                <div>
                  <div className="q">{faq.q}</div>
                  <p className="a">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="shell">
          <span className="section-counter">03 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">→ show up when it matters</div>
            <h2>Get Found by<br />Local Customers.</h2>
            <p className="lede">Get found by customers in your area. Start showing up where it matters.</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ get started</Link>
            <Link href="/services" className="btn btn-ghost">← all services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
