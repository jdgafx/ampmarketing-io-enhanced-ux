import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Consistent Social Presence Package",
  description: "Consistent social media posting that keeps your brand visible. 20 posts a month that sound like you, not a robot.",
  keywords: ["social media management service", "social media posting service", "Instagram management for business", "LinkedIn content management", "Facebook business page management", "social media agency", "social media marketing", "brand awareness social media", "social media content calendar", "X Twitter management", "social media for small business", "social media agency Nashua NH", "best social media management 2025", "affordable social media service"],
};

const faqs = [
  { q: "Which platforms work best for my business?", a: "It depends on your audience. A local restaurant does better on Instagram and Google Business than LinkedIn. We identify where your customers spend their time and focus there." },
  { q: "Can I preview posts before they go live?", a: "Of course. You get a content calendar at the start of each month. Review it, approve it, request changes—we don't publish anything without your sign-off." },
  { q: "Can you post from my accounts?", a: "Yes, if you give us access. Or we deliver the content and you post it yourself. Whatever you're comfortable with." },
  { q: "What if the content doesn't sound right?", a: "We adjust. It usually takes one or two rounds to nail your brand voice. We keep refining until it sounds like you." },
];

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 06</span>
            <span className="bul">·</span>
            <span>social-media</span>
            <span className="bul">·</span>
            <span>managed</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            Consistent Social<br />
            <em>Presence.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            Consistent posting builds your brand, but it takes time you don&apos;t have. We handle it&mdash;three posts a week with real photos and captions that start conversations. Your brand stays visible and your audience stays engaged.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>3 days</dd></div>
            <div><dt>best for</dt><dd>brand presence</dd></div>
            <div><dt>engine</dt><dd>write · schedule · engage</dd></div>
            <div><dt>handoff</dt><dd>calendar · content · reporting</dd></div>
          </dl>
        </div>
      </header>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>Results Without Being<br />Glued to Your Phone.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>You want results without being glued to your phone all day. Here&apos;s what we deliver:</p>
              <ul className="checklist">
                <li>20 posts a month that sound like you—no stiff corporate language.</li>
                <li>We manage LinkedIn, Facebook, Instagram, and X. All of them, if you want.</li>
                <li>Custom visuals that represent your brand. No more generic stock photos.</li>
                <li>Hashtags researched and selected to reach new audiences, not randomly thrown together.</li>
                <li>Community engagement—we reply to comments, answer questions, and build relationships on your behalf.</li>
                <li>Monthly performance reports with the metrics that matter. No vanity numbers.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price">from <em>$299</em>/mo</div>
              <div className="sub">We also prepare and schedule your content.</div>
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
            <div className="eyebrow">→ your social media, handled</div>
            <h2>Your Brand<br />Stays Alive.</h2>
            <p className="lede" style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--amp-text)', fontSize: '22px' }}>
              &ldquo;I kept meaning to post but never did. Now my Instagram actually looks alive.&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-muted)', letterSpacing: '0.04em', marginTop: '12px' }}>— restaurant owner · amp marketing client</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ get a content calendar</Link>
            <Link href="/services" className="btn btn-ghost">← all services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
