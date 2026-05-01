import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Assisted Leadgen",
  description: "Convert potential customers 24/7. AI-powered lead capture on your website, Facebook, and LinkedIn.",
  keywords: ["lead generation funnel", "AI lead generation system", "automated sales funnel", "lead capture system", "lead nurturing automation", "B2B lead generation service", "appointment booking funnel", "sales funnel agency", "AI-powered lead generation", "multi-channel lead funnel", "lead magnet funnel setup", "best lead generation agency 2025", "automated prospect pipeline", "sales funnel for small business"],
  openGraph: {
    title: "AI Lead Generation Funnel | AMP Marketing",
    description: "Convert potential customers 24/7. AI-powered lead capture on your website, Facebook, and LinkedIn.",
    url: "https://ampmarketing-io-enhanced-ux.netlify.app/services/lead-funnel",
    type: "website",
  },
  alternates: {
    canonical: "https://ampmarketing-io-enhanced-ux.netlify.app/services/lead-funnel",
  },
};

const faqs = [
  { q: "Is this chatbot different from the one I already have?", a: "Most chatbots handle basic FAQ-style questions and stop there. Ours is a sales tool. It qualifies visitors through a natural conversation, collects their contact information, and books appointments on your calendar—without you lifting a finger. One client told us their old bot felt like a vending machine. Ours works more like a top sales rep who never clocks out." },
  { q: "What if I already have a CRM?", a: "We integrate with all major CRM platforms—HubSpot, Salesforce, Pipedrive, Zoho, and more. Every conversation and data point flows directly into your existing setup. Your team gets full visibility, and leads never have to repeat themselves." },
  { q: "Facebook Messenger sounds complicated. Is it?", a: "Not at all—this is one of our strengths. Here's a typical scenario: someone messages your Facebook page at 3 AM. Your AI assistant responds instantly, asks a few qualifying questions, and if they're a fit, books a call at their convenience. They pick a slot from your calendar, and it's done. You wake up to a calendar full of qualified appointments." },
  { q: "I have tried LinkedIn automation before and it felt spammy.", a: "We understand that concern completely. Generic bots that blast the same message to everyone are ineffective and damage your reputation. Our approach is different. We identify individuals who match your ideal customer profile, engage with their content through thoughtful and relevant comments, and then open genuine conversations. The result is warm introductions—not cold spam." },
  { q: "How long does it take to see the results?", a: "Timeline depends on your current traffic levels. That said, most clients see their first qualified lead within the first week. The system also improves over time—it learns what converts best for your specific business. By week three or four, you'll typically have a steady flow of leads coming in without any extra effort on your end." },
  { q: "What if I want to change things after the launch?", a: "During the first month, all modifications are included at no extra cost. After that, changes are billed at reasonable hourly rates. We don't disappear after launch—you'll get regular updates on performance and optimizations. Most clients stay with us not because of a contract, but because the system delivers consistent results." },
];

export default function LeadGenPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 01</span>
            <span className="bul">·</span>
            <span>lead-funnel</span>
            <span className="bul">·</span>
            <span>ai-native</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            AI Assisted<br />
            <em>Leadgen.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            Most lead funnels fail in one of two ways: they overwhelm visitors with too many form fields, or they go silent after the first touchpoint. Our AI-powered funnels guide prospects from first click to booked appointment—without dropping a single lead.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>under 7 days</dd></div>
            <div><dt>best for</dt><dd>full-pipeline ops</dd></div>
            <div><dt>engine</dt><dd>chatbot · messenger · linkedin</dd></div>
            <div><dt>handoff</dt><dd>system · access · reporting</dd></div>
          </dl>
        </div>
      </header>

      {/* Spec + Price */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>Why AI Assisted Leadgen<br />works better.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '32px' }}>We build lead funnels that turn prospects into booked appointments. Here&apos;s how the system works:</p>
              <ul className="checklist">
                <li>First, we identify a lead magnet your target customers can&apos;t resist—a checklist, guide, calculator, or resource they&apos;ll download without hesitation.</li>
                <li>Next, we design a landing page built for conversions. We target 20% conversion rates or higher. Most agencies celebrate 5%—we don&apos;t stop there.</li>
                <li>Then we create an email sequence that reads like a personal conversation, not a mass blast. Each message nurtures leads progressively until they&apos;re ready for a call.</li>
                <li>By syncing with your calendar, we skip the back-and-forth email threads and let qualified leads book time with you directly.</li>
                <li>We also handle all the tracking. You&apos;ll see exactly what&apos;s working and where to improve—no guesswork.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price"><em>$1,499</em> setup<br />+ <em>$299</em>/mo</div>
              <div className="sub">Complete lead generation system. We build it, manage it, and keep your pipeline full.</div>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>→ get started</Link>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', textAlign: 'center', marginTop: '18px', letterSpacing: '0.04em' }}>most customers get their first qualified lead in under a week.</p>
            </aside>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">02 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">architecture / how it fits together</div>
            <h2>Three channels.<br />One system.</h2>
            <p className="lede">Most businesses only use one or two of these channels. We connect all three so you capture every lead—no matter where a prospect first discovers you.</p>
          </div>
          <div className="channels" data-reveal>
            <div className="channel">
              <div className="num">01 · channel · web</div>
              <h3>Website Chatbot.</h3>
              <p>Engages visitors at the right moment, asks qualifying questions, and books appointments—all on autopilot, 24/7.</p>
              <div className="stat">→ never miss a lead again</div>
            </div>
            <div className="channel">
              <div className="num">02 · channel · social</div>
              <h3>Facebook Messenger.</h3>
              <p>1.3 billion people use Messenger every month. Reach prospects on a platform they already use and trust—with instant, automated responses.</p>
              <div className="stat">→ instant response, any time of day</div>
            </div>
            <div className="channel">
              <div className="num">03 · channel · b2b</div>
              <h3>LinkedIn Automation.</h3>
              <p>Finds prospects who match your criteria, engages with their content through meaningful comments and shares, and starts conversations that lead to sales.</p>
              <div className="stat">→ warm introductions at scale</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">03 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">straight answers</div>
            <h2>Common questions.</h2>
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

      {/* Closing */}
      <section className="closing">
        <div className="shell">
          <span className="section-counter">04 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">→ the number one reason leads get lost</div>
            <h2>It&apos;s response time.</h2>
            <p className="lede">If a lead doesn&apos;t hear back within 5 minutes, the chance of conversion drops by 10×. People get distracted, lose interest, or find a competitor who responded faster.</p>
            <p className="lede" style={{ marginTop: '24px', fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--amp-text)', fontSize: '22px' }}>
              &ldquo;I was losing 5 to 10 leads every week because I couldn&apos;t respond fast enough. Now I wake up to appointments already on my calendar.&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amp-muted)', letterSpacing: '0.04em', marginTop: '12px' }}>— gym owner · amp marketing client</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ book your discovery call</Link>
            <Link href="/services" className="btn btn-ghost">← all services</Link>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', letterSpacing: '0.04em', marginTop: '24px' }}>15 minutes, no pressure. we&apos;ll discuss your goals and see if we&apos;re the right fit.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
