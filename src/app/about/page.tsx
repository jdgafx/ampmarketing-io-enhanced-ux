import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AI-Driven Growth for 500+ Businesses",
  description: "Founded by Michael Krieger, AMP Marketing combines Prime Marketing Experts' decade of experience with AI technology to deliver faster, more affordable lead generation for businesses nationwide.",
  keywords: ["about AMP Marketing", "Michael Krieger marketing", "Prime Marketing Experts", "AI marketing company", "marketing agency Nashua NH", "small business lead generation agency", "AI-powered business growth", "digital marketing agency New Hampshire", "AI marketing firm Boston area", "Nashua NH digital marketing", "results-driven marketing agency", "marketing automation company"],
  openGraph: {
    title: "About Us | Smart Marketing, Real Results",
    description: "From Prime Marketing Experts to AMP Marketing — we've helped 500+ businesses grow with AI-powered lead generation, chatbots, and sales automation.",
    url: "https://ampmarketing-io-enhanced-ux.netlify.app/about",
  },
};

const coreValues = [
  { marker: "01 · VALUE", title: "Results-First.", desc: "We measure success by outcomes, not activity. Every dollar you invest should bring back more in return." },
  { marker: "02 · VALUE", title: "No-Nonsense.", desc: "Clear communication, upfront prices, realistic timelines. No corporate jargon, no hidden fees." },
  { marker: "03 · VALUE", title: "Fast & Flexible.", desc: "We move fast and scale with your business. No bureaucracy, no endless approval chains." },
  { marker: "04 · VALUE", title: "Measurable Results.", desc: "We track every lead so you always know whether your investment is paying off." },
];

const testimonials = [
  { quote: "We scaled from 10 leads a month to over 100 in just 8 weeks. The chatbot generates leads around the clock while we focus on running the business.", author: "Mike R.", company: "HVAC Company Owner" },
  { quote: "We've worked with several agencies before, but none delivered this fast. More patients showed interest in month one than we saw all of last year.", author: "Sarah L.", company: "Dental Practice" },
  { quote: "We went from invisible on Google to the top of the local map pack. The phone rings nonstop with people wanting to book reservations.", author: "James T.", company: "Local Restaurant Owner" },
  { quote: "The AI voice receptionist keeps paying for itself every month. We used to lose 20% of calls because nobody could pick up.", author: "Amanda K.", company: "Law Firm" },
  { quote: "Email automation transformed our business. We used to spend hours every week on manual follow-ups. Now it runs itself, and our close rate is up 40%.", author: "David M.", company: "Real Estate Agency" },
  { quote: "Our landing page generated $47,000 in revenue during its first month. Not a typo. Best marketing investment we've ever made.", author: "Jennifer P.", company: "E-commerce Business" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">AMP MARKETING</span>
            <span className="bul">·</span>
            <span>about</span>
            <span className="bul">·</span>
            <span>nashua, nh</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            About AMP<br />
            <em>Marketing.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            We help find more leads for businesses and help them close more sales through technologies that really work.
          </p>
        </div>
      </header>

      {/* Core Values */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">how we work</div>
            <h2>What we stand for.</h2>
          </div>
          <div className="whys">
            {coreValues.map((v) => (
              <div className="why" key={v.marker}>
                <div className="marker">{v.marker}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">02 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">our story</div>
            <h2>Where we came from.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>
                AMP Marketing was built by the same team behind{' '}
                <a href="https://www.primemarketingexperts.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amp-primary)', textDecoration: 'underline' }}>
                  Prime Marketing Experts
                </a>
                . With Michael Krieger at the helm, our core mission hasn&apos;t changed: help businesses grow through smart, results-driven marketing.
              </p>
              <p style={{ color: 'var(--amp-muted)', marginBottom: '24px', lineHeight: 1.7 }}>
                Michael founded Prime Marketing Experts back in 2017. He grew up in Boston, graduated from UMass Lowell, and has spent the better part of his career helping businesses scale. Along the way, he saw something clearly: AI had reached a point where it could make marketing faster and far more affordable for everyday businesses.
              </p>
              <p style={{ color: 'var(--amp-muted)', marginBottom: '24px', lineHeight: 1.7 }}>
                AMP Marketing is the result of that realization. We took everything we learned at Prime and combined it with AI tools that deliver qualified leads in days, not months.
              </p>
              <p style={{ color: 'var(--amp-muted)', lineHeight: 1.7 }}>
                Today we serve over 500 businesses nationwide. Whether you&apos;re a plumber or a law firm, you get the same attention to detail and focus on results that Michael has brought to every project since day one.
              </p>
            </div>
            <aside>
              <div className="price-card">
                <div className="label">the amp difference</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '8px' }}>
                  {[
                    { title: "Fair Pricing", desc: "You know exactly what you're paying for. No surprise fees, and you can cancel whenever you want." },
                    { title: "Measurable Results", desc: "We track every lead so you always know whether your investment is paying off." },
                    { title: "Fast Setup", desc: "Most projects launch within a week. No waiting months to see results." },
                    { title: "Real Support", desc: "Questions? Send us an email. Real people manage your account and respond quickly." },
                  ].map((item) => (
                    <div key={item.title}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--amp-primary)', marginBottom: '6px', textTransform: 'uppercase' }}>→ {item.title}</div>
                      <p style={{ color: 'var(--amp-muted)', fontSize: '14px', lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }}>
                  → let us get to work
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">03 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">client voices</div>
            <h2>What our clients say.</h2>
          </div>
          <div className="quotes">
            {testimonials.map((t) => (
              <div className="quote" key={t.author}>
                <div className="stars">★ ★ ★ ★ ★</div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="who">
                  <strong>{t.author}</strong>
                  {t.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">04 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">success stories</div>
            <h2>Case Studies.</h2>
            <p className="lede">Real numbers from real clients. No marketing fluff.</p>
          </div>

          <div className="faqs" data-reveal>
            <div className="faq">
              <div className="num">01</div>
              <div>
                <div className="q">HVAC Company — 567% lead increase</div>
                <p className="a">
                  This HVAC company was pulling about 15 leads a month from their website. The business relied almost entirely on referrals and word of mouth. We installed a 24/7 AI chatbot for lead capture, optimized their Google Business profile, and built landing pages targeting the areas they serve. Eight weeks later: over 100 leads in a single month. That&apos;s a 567% increase. Their cost per lead dropped 62%, and the chatbot now books appointments automatically.
                </p>
                <p className="a" style={{ marginTop: '12px', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                  &ldquo;I wasn&apos;t sure at first, but they delivered. Our phone hasn&apos;t stopped ringing since.&rdquo;
                </p>
              </div>
            </div>
            <div className="faq">
              <div className="num">02</div>
              <div>
                <div className="q">Dental Practice — 47 new patients in month one</div>
                <p className="a">
                  A new dental clinic struggling to fill chairs. Too many no-shows, and their online reviews were a mess. We set up an AI-powered phone scheduler plus automated follow-up emails to confirm appointments and request patient feedback. Month one: 47 new patient appointments. No-shows dropped 73%. They hit a 4.8-star rating with over 120 reviews.
                </p>
                <p className="a" style={{ marginTop: '12px', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                  &ldquo;Our staff saves 10+ hours every week with the automation, and patient flow has been incredible.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
