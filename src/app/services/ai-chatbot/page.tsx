import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Setup",
  description: "An AI chatbot that captures leads around the clock. Never lose another website visitor.",
  keywords: ["AI chatbot for business", "website chatbot service", "lead capture chatbot", "automated appointment booking chatbot", "24/7 AI chatbot", "AI lead qualification", "chatbot for small business", "best business chatbot 2025", "AI customer service chatbot", "chatbot lead generation", "website visitor engagement bot", "conversational AI for business", "chatbot setup service", "AI chatbot agency"],
};

const faqs = [
  { q: "How does the free trial work?", a: "You get full access for 7 days, no credit card required. See how many leads the chatbot captures for you. If it's not a fit, walk away. Zero risk." },
  { q: "How is the AI trained?", a: "We feed it your website content, PDFs, and documents. The bot absorbs all of it and gives answers specific to your business, not generic filler." },
  { q: "Does it work with my calendar?", a: "Yes. Google Calendar, Outlook, and most other platforms. It checks your availability in real time and only books open slots. We handle the entire setup for you." },
  { q: "What if it doesn't know an answer?", a: "It lets the visitor know someone will follow up, then immediately alerts your team via email or text. You take it from there and close the deal." },
];

export default function AiChatbotPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 05</span>
            <span className="bul">·</span>
            <span>ai-chatbot</span>
            <span className="bul">·</span>
            <span>ai-native</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            Smart Website<br />
            <em>Chat.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            Your website should do more than sit there looking pretty. If it&apos;s not engaging visitors, qualifying leads, and booking appointments while you sleep, it&apos;s costing you money. Our AI chatbots are trained on your business and guide visitors from casual browsing to a booked appointment.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>7 days</dd></div>
            <div><dt>best for</dt><dd>lead capture</dd></div>
            <div><dt>engine</dt><dd>qualify · book · learn</dd></div>
            <div><dt>handoff</dt><dd>system · access · reporting</dd></div>
          </dl>
        </div>
      </header>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>Ways Your Business<br />Benefits.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>Most chatbots on the market are worthless. We do things differently. We train yours on your business files, docs, and PDFs so it sounds like you, not some generic script. This AI doesn&apos;t need breaks. It works your schedule, which is 24/7.</p>
              <ul className="checklist">
                <li>Trained on your website, docs, and PDFs so it understands your business inside and out.</li>
                <li>Qualifies every lead before booking, so you only meet with people who are ready to buy.</li>
                <li>Syncs with your calendar to prevent double-bookings. Works with Google, Outlook, and more.</li>
                <li>Responds instantly at 2 AM, on weekends, and on holidays. Your leads never wait.</li>
                <li>Conversations feel natural and personal, tailored to each visitor&apos;s questions and needs.</li>
                <li>Gets smarter over time by learning from every interaction.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price"><em>$497</em> setup<br />+ <em>$149</em>/mo</div>
              <div className="sub">Custom training and monthly AI management.</div>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>→ get started</Link>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', textAlign: 'center', marginTop: '18px', letterSpacing: '0.04em' }}>try it on your site. only pay if you see results.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">02 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">straight answers</div>
            <h2>Frequently Asked<br />Questions.</h2>
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
            <div className="eyebrow">→ your next customer is on your website right now</div>
            <h2>Never Miss<br />Another Lead.</h2>
            <p className="lede">Give it 7 days. If you&apos;re not getting more qualified leads, cancel and pay nothing.</p>
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
