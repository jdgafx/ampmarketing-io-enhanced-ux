import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Human-Like Follow Ups Sequences",
  description: "Employ smart email sequences that successfully convert subscribers into customers.",
  keywords: ["email automation services", "automated email sequences", "email marketing automation", "drip campaign setup", "abandoned cart email recovery", "email follow-up automation", "B2B email sequences", "email nurture campaigns", "automated lead follow-up emails", "email automation agency", "best email automation for small business", "cold email sequences", "welcome email automation", "email marketing agency"],
};

const faqs = [
  { q: "How long does this take?", a: "About one week. We spend 1-2 days learning your communication style, setting up the platform, and running initial tests. Taking the time upfront means fewer revisions later." },
  { q: "What platforms do you work with?", a: "Mailchimp, ConvertKit, Klaviyo, ActiveCampaign, and most others. If you're on a less common platform, we'll find a way to make it work." },
  { q: "Can I write my own copy?", a: "Absolutely. You can write your own copy, we can write it, or we collaborate on a hybrid version. Your business, your call." },
  { q: "What about spam filters?", a: "We handle all the technical details — DKIM, SPF, and list hygiene — so your emails actually reach inboxes. Most clients see a 95%+ delivery rate." },
];

export default function EmailAutomationPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 08</span>
            <span className="bul">·</span>
            <span>email-automation</span>
            <span className="bul">·</span>
            <span>human-like</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            Human-Like<br />
            <em>Follow Ups.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            Most automated emails feel like spam. Ours don&apos;t. Our sequences read as if a real person wrote them, not a robot. That&apos;s how you convert subscribers into customers without sounding robotic.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>7 days</dd></div>
            <div><dt>best for</dt><dd>lead nurturing</dd></div>
            <div><dt>engine</dt><dd>sequence · trigger · convert</dd></div>
            <div><dt>handoff</dt><dd>copy · automations · reporting</dd></div>
          </dl>
        </div>
      </header>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>Most Customers See Impact<br />Within a Week.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>The goal is to make every email feel like a personal conversation between just two people. Whether it&apos;s HVAC or legal services, we have experience across both. Here&apos;s what we deliver:</p>
              <ul className="checklist">
                <li>Welcome emails that read like a personal note, not a mass broadcast.</li>
                <li>Abandoned cart recovery emails that bring shoppers back — we typically see 15-30% recovery rates.</li>
                <li>Follow-up emails that nurture leads without being pushy.</li>
                <li>Re-engagement campaigns for long-lost subscribers who haven&apos;t opened your emails in months.</li>
                <li>Intelligent triggers based on real user behavior on your site.</li>
                <li>A/B testing on every sequence. We measure what works and cut what doesn&apos;t.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price"><em>$199</em> setup<br />+ <em>$49</em>/mo</div>
              <div className="sub">Personalized sequence creation and monthly fine-tuning. First 2,500 subscribers included.</div>
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
            <div className="eyebrow">→ stop chasing leads manually</div>
            <h2>Follow-Ups That<br />Run Themselves.</h2>
            <p className="lede" style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--amp-text)', fontSize: '22px' }}>
              &ldquo;I used to spend 3 hours a day on follow-ups. Now it all happens while I sleep.&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-muted)', letterSpacing: '0.04em', marginTop: '12px' }}>— amp marketing client</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ build my sequence</Link>
            <Link href="/services" className="btn btn-ghost">← all services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
