import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Voice Receptionist",
  description: "AI-powered phone answering that works 24/7 so you never miss a call again.",
  keywords: ["AI voice receptionist", "automated phone answering service", "AI phone system for business", "virtual receptionist for small business", "24/7 call answering service", "missed call solution", "AI appointment booking by phone", "AI phone agent", "automated call handling", "never miss a call again", "AI receptionist cost", "virtual phone receptionist agency", "best AI voice agent 2025", "phone answering bot for business"],
  openGraph: {
    title: "AI Voice Receptionist | AMP Marketing",
    description: "AI-powered phone answering that works 24/7 so you never miss a call again.",
    url: "https://ampmarketing-io-enhanced-ux.netlify.app/services/ai-voice",
    type: "website",
  },
  alternates: {
    canonical: "https://ampmarketing-io-enhanced-ux.netlify.app/services/ai-voice",
  },
};

const faqs = [
  { q: "How fast can I get this running?", a: "Most businesses are live within 48 hours. Just tell us about your services, your availability, and how you want calls handled. We take care of the rest." },
  { q: "What if it can't help someone?", a: "You set the routing rules. The AI can collect the caller's details and text them to you, forward the call to your mobile, or schedule a callback — whatever fits your workflow." },
  { q: "Do I need a new phone number?", a: "No. You keep your existing number. We route incoming calls through our system behind the scenes — nothing changes for your customers." },
  { q: "How do I know how many calls you handled?", a: "Your dashboard shows everything — call volume, duration, outcomes, and booked appointments. Full visibility, zero guesswork." },
];

export default function AiVoicePage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 03</span>
            <span className="bul">·</span>
            <span>ai-voice</span>
            <span className="bul">·</span>
            <span>ai-native</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            Virtual Front<br />
            <em>Desk.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            Every missed call is lost revenue. When no one picks up, your customer calls the next business on Google. Our AI receptionist answers every call instantly — day or night. It books appointments, answers questions, and runs your front desk without supervision.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>48 hrs</dd></div>
            <div><dt>best for</dt><dd>inbound calls</dd></div>
            <div><dt>engine</dt><dd>inbound · outbound · book</dd></div>
            <div><dt>handoff</dt><dd>system · access · reporting</dd></div>
          </dl>
        </div>
      </header>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>Your Phone Works<br />24/7 Now.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>Most businesses only answer about two-thirds of their calls. That means a third of potential revenue goes straight to a competitor. Our AI receptionist picks up every single call, engages the caller in natural conversation, and books appointments around the clock — even at 2 AM on a Sunday.</p>
              <ul className="checklist">
                <li>It answers on the first ring. Your callers get a natural, human-like conversation and book their appointments — no voicemail, no waiting.</li>
                <li>The AI qualifies callers, identifies who needs your services, and books them straight into your schedule.</li>
                <li>Need flexibility? The AI can forward urgent calls to your mobile or take a detailed message and text it to you.</li>
                <li>Keep your existing phone number. No changes, no porting. Your number stays yours.</li>
                <li>Setup takes less than an hour. We train the AI on your services, hours, and call handling preferences — then it goes live.</li>
                <li>It syncs with whatever calendar you use. Google, Outlook, Calendly — no double-bookings, ever.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price"><em>$497</em> setup<br />+ <em>$249</em>/mo</div>
              <div className="sub">Full setup, custom training, and 24/7 support included.</div>
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
            <h2>Got questions?<br />We&apos;re here to help.</h2>
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
            <div className="eyebrow">→ stop losing customers to voicemail</div>
            <h2>Every Call.<br />Answered.</h2>
            <p className="lede">Try it free for 7 days. See how many extra appointments your business books when every call gets answered.</p>
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
