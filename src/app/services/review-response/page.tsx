import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Reputation Management System",
  description: "Automated review responses that sound personal and professional. Every review gets a reply within 24 hours.",
  keywords: ["reputation management service", "automated review responses", "Google review management", "Yelp review response service", "online reputation management", "review monitoring service", "business review management", "customer feedback automation", "AI review response", "respond to Google reviews automatically", "negative review management", "review generation service", "online reviews for business", "best reputation management agency 2025"],
};

const faqs = [
  { q: "Can I tweak the responses?", a: "Yes. You can adjust the tone, approve templates in advance, or just let it run. You're always in control of how your brand sounds." },
  { q: "Which platforms do you monitor?", a: "Everywhere your customers leave reviews. Google, Yelp, TripAdvisor, Facebook, and more." },
  { q: "What about angry customers?", a: "Sensitive reviews get flagged and sent to you immediately. We don't let AI handle heated situations unsupervised unless you tell us otherwise." },
  { q: "Does it sound robotic?", a: "Not at all. We train it to avoid the 'Thank you, valued customer' template tone. Every reply reads like a real person wrote it." },
];

export default function ReviewResponsePage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 10</span>
            <span className="bul">·</span>
            <span>review-response</span>
            <span className="bul">·</span>
            <span>reputation</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            Reputation<br />
            <em>Management.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            Every review deserves a response. We handle yours automatically&mdash;thoughtful, personalized replies within 24 hours. It shows customers you care, and it helps your business rank higher in local search.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>24 hrs</dd></div>
            <div><dt>best for</dt><dd>brand trust</dd></div>
            <div><dt>engine</dt><dd>monitor · respond · protect</dd></div>
            <div><dt>handoff</dt><dd>system · access · reporting</dd></div>
          </dl>
        </div>
      </header>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>Protect and Build<br />Your Reputation.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>Here&apos;s how we protect and build your reputation while you focus on running your business:</p>
              <ul className="checklist">
                <li>Positive reviews get sincere, specific thank-you responses—not generic templates.</li>
                <li>Negative reviews are handled professionally. We de-escalate the situation so you don&apos;t have to.</li>
                <li>Every response is trained to match your voice and tone, not sound like a corporate press release.</li>
                <li>We monitor Google, Yelp, Facebook, and any other platform where customers leave feedback.</li>
                <li>If something urgent comes in, you get an immediate alert on your phone so you can step in if needed.</li>
                <li>Responses go out quickly—often within minutes, not hours.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price">from <em>$99</em>/mo</div>
              <div className="sub">The price includes unlimited number of replies. There is no charge per review.</div>
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
            <div className="eyebrow">→ build trust automatically</div>
            <h2>Every Review.<br />Answered.</h2>
            <p className="lede">Every review should receive a response. Let your customers know that you value them. Get started today.</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ start free trial</Link>
            <Link href="/services" className="btn btn-ghost">← all services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
