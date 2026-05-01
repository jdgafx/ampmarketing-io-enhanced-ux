import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High-Converting Pages",
  description: "Pages designed to convert visitors into paying customers. Simple, quick, and user-friendly.",
  keywords: ["landing page design service", "high-converting landing pages", "lead capture page design", "landing page agency", "conversion rate optimization", "mobile-optimized landing pages", "custom landing page builder", "landing page for lead generation", "fast loading landing pages", "A/B tested landing pages", "landing page copywriting", "best landing page agency 2025", "PPC landing page design", "Bing Ads landing pages"],
  openGraph: {
    title: "High-Converting Landing Pages | AMP Marketing",
    description: "Pages designed to convert visitors into paying customers. Simple, quick, and user-friendly.",
    url: "https://ampmarketing-io-enhanced-ux.netlify.app/services/landing-pages",
    type: "website",
  },
  alternates: {
    canonical: "https://ampmarketing-io-enhanced-ux.netlify.app/services/landing-pages",
  },
};

const faqs = [
  { q: "Where will the pages actually be?", a: "We can either put it on your existing website or create a new one for you. It'll work whichever way you choose." },
  { q: "Can you integrate with my CRM?", a: "Of course, we can feed the leads directly into HubSpot, Salesforce, Mailchimp—the CRM of your choice. No hassles." },
  { q: "What if I want changes after some time?", a: "We cover the first 30 days of tweaks, and after that, we are always available if you need further updates." },
  { q: "How many conversions do you think I will get?", a: "Results depend on your product and your traffic. We build the conversion mechanism—you bring the audience." },
];

export default function LandingPagesPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 04</span>
            <span className="bul">·</span>
            <span>landing-pages</span>
            <span className="bul">·</span>
            <span>conversion-first</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            High-Converting<br />
            <em>Pages.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            Only one page needed to turn visitors into leads. We come up with the text, the design, and ensure that the &quot;Buy&quot; button is 100% functional. You get an elegant website that loads fast and is a great source of income for you.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>5 days</dd></div>
            <div><dt>best for</dt><dd>lead capture</dd></div>
            <div><dt>engine</dt><dd>design · copy · launch</dd></div>
            <div><dt>handoff</dt><dd>page · analytics · revisions</dd></div>
          </dl>
        </div>
      </header>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>What Makes a Page<br />Actually Convert.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>Here is the straightforward comparison between an attractive page and one that generates sales:</p>
              <ul className="checklist">
                <li>Flawless on mobile—where over 70% of your visitors are browsing.</li>
                <li>Lightning-fast load times under 3 seconds. Anything slower and visitors leave.</li>
                <li>Headlines that stop the scroll.</li>
                <li>Trust is instantly established when we combine your glowing testimonials and client logos—because people buy from people they trust.</li>
                <li>Prominent and obvious buttons. We don&apos;t make it difficult to check out.</li>
                <li>We set up proper analytics so you always know where the money is coming from.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price">from <em>$799</em>/page</div>
              <div className="sub">One-time fee per page. You are free to revise the content two times.</div>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>→ order landing page</Link>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', textAlign: 'center', marginTop: '18px', letterSpacing: '0.04em' }}>one-time fee per page.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">02 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">straight answers</div>
            <h2>Things You May Be<br />Wondering About.</h2>
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
            <div className="eyebrow">→ the landing page you&apos;ve been procrastinating about</div>
            <h2>Stop Putting It<br />Off.</h2>
            <p className="lede">One e-commerce brand reported that a single landing page generated $47,000 in its first month. They had been putting it off for nearly two years.</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ build my page</Link>
            <Link href="/services" className="btn btn-ghost">← all services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
