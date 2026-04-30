import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Peak Performance Ads Optimization",
  description: "Ad copy that grabs attention, drives clicks, and lowers your cost per lead. We test relentlessly so your budget works harder.",
  keywords: ["ad copy optimization", "PPC ad writing service", "Google Ads copywriting", "Bing Ads copy optimization", "Facebook ad copy writing", "ad headline testing", "cost per lead reduction", "paid advertising agency", "Meta ad copy agency", "LinkedIn Ads copywriting", "Microsoft Ads copy", "ad A/B testing service", "lower cost per click", "PPC agency Nashua NH", "best ad copy agency 2025"],
};

const faqs = [
  { q: "Which platforms do you handle?", a: "Google Ads, Meta (Facebook and Instagram), LinkedIn Ads, and Microsoft Ads. Each platform has its own best practices, so we tailor copy for every one." },
  { q: "How many variations do you write?", a: "Typically 4-8 per ad set. Enough to run meaningful tests without overcomplicating things." },
  { q: "What if I already have ads running?", a: "No problem. We'll benchmark your current ads against our new versions. Sometimes a small tweak is all it takes. Other times, a full rewrite makes the difference." },
  { q: "How do you know if it's working?", a: "We track clicks, conversions, and cost per lead. When results go up and costs go down, it's working. We don't chase vanity metrics." },
];

export default function AdCopyPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 07</span>
            <span className="bul">·</span>
            <span>ad-copy</span>
            <span className="bul">·</span>
            <span>100+ platforms</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            Peak Performance<br />
            <em>Ads.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            Stop burning money on ads nobody clicks. We write sharp headlines, test multiple variations, and optimize your campaigns every week. Your cost per lead goes down. Your results go up.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>3 days</dd></div>
            <div><dt>best for</dt><dd>paid traffic</dd></div>
            <div><dt>engine</dt><dd>google · meta · linkedin</dd></div>
            <div><dt>handoff</dt><dd>copy · variants · reporting</dd></div>
          </dl>
        </div>
      </header>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>Stop Wasting Your<br />Ad Budget.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>Here&apos;s a number that should bother you: most companies waste 30-50% of their ad budget on weak copy. We fix that.</p>
              <ul className="checklist">
                <li>We write 4-8 headline variations per ad set and let real data pick the winner.</li>
                <li>Clear calls to action that make people click—not generic &apos;Learn More&apos; buttons everyone scrolls past.</li>
                <li>Platform-specific copy for Google, Meta, LinkedIn, and Microsoft Ads. What works on LinkedIn won&apos;t work on Instagram.</li>
                <li>Different messaging for different audiences. A homeowner thinks differently than a contractor.</li>
                <li>Ad quality scores that get your ads noticed faster and shown more often.</li>
                <li>Weekly optimizations based on performance data, not guesswork.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price"><em>$299</em> setup<br />+ <em>$199</em>/mo</div>
              <div className="sub">Unlimited copy revisions.</div>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>→ get started</Link>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', textAlign: 'center', marginTop: '18px', letterSpacing: '0.04em' }}>try it free for 7 days.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">02 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">straight answers</div>
            <h2>Quick<br />Questions.</h2>
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
            <div className="eyebrow">→ want to stop wasting your ad budget?</div>
            <h2>Better Copy.<br />Less Waste.</h2>
            <p className="lede">One dental client cut their cost per lead by 40% in the first month. Better copy, less waste.</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ get better copy</Link>
            <Link href="/services" className="btn btn-ghost">← all services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
