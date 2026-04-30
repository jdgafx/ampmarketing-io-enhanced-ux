import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing Agency | Automated Lead Generation & Sales Tools",
  description: "AMP Marketing builds AI-powered lead generation systems, chatbots, voice receptionists, and sales automation tools for small businesses. Get more leads, book more appointments, and grow revenue on autopilot.",
  keywords: ["AI marketing agency", "automated lead generation", "AI chatbot for business", "AI voice receptionist", "marketing automation", "lead generation services", "sales automation tools", "small business marketing", "Nashua NH marketing agency", "digital marketing automation", "Bing Ads management company", "Google Ads management agency", "AI lead capture system", "appointment booking automation", "business growth tools", "AI marketing services near me", "best AI marketing agency 2025", "affordable lead generation", "AI-powered sales funnel", "marketing agency for small business"],
  openGraph: {
    title: "AMP Marketing | AI-Powered Lead Generation & Sales Automation",
    description: "Get more leads and book more appointments with AI chatbots, voice receptionists, email automation, and smart sales funnels. Built for small businesses that want to grow.",
    url: "https://ampmarketing-io-enhanced-ux.netlify.app",
    type: "website",
  },
};

const services = [
  { num: "01", title: "Automated Sales Funnels", href: "/services/lead-funnel", desc: "We use AI to find your ideal clients across social media, Google, and other ad platforms. Your funnel stays full so you can focus on closing deals. It's like a sales team that never takes a break.", price: "$1,499 setup + $299/mo" },
  { num: "02", title: "SEO Content", href: "/services/seo-content", desc: "We research and write articles that rank well on Google. Fresh content brings in organic visitors month after month, without the cost of a big writing agency. One of the smartest ways to build authority online.", price: "$149 per article" },
  { num: "03", title: "AI Voice", href: "/services/ai-voice", desc: "Our AI answers calls, qualifies leads, and books appointments around the clock. Inbound or outbound, it handles both. Your phone becomes a 24/7 appointment-booking machine.", price: "$497 setup + $249/mo" },
  { num: "04", title: "Landing Pages", href: "/services/landing-pages", desc: "You have about 3 seconds before a visitor leaves. We build pages that load fast, look sharp, and turn browsers into buyers.", price: "$799 one-time" },
  { num: "05", title: "AI Chatbot", href: "/services/ai-chatbot", desc: "Your website visitors get an intelligent conversation partner that answers questions and books meetings for you. One client tripled their leads in a week after we set this up.", price: "$497 setup + $149/mo" },
  { num: "06", title: "Social Media", href: "/services/social-media", desc: "Consistent posting builds your brand, but it takes time you don't have. We handle it for you. Regular posts that keep you visible and help your audience get to know you, without lifting a finger.", price: "$299/mo" },
  { num: "07", title: "Ad Copy", href: "/services/ad-copy", desc: "Stop burning money on ads nobody clicks. We write compelling headlines and test variations until your cost per lead drops. You watch the numbers go up while we do the heavy lifting.", price: "$299 setup + $199/mo" },
  { num: "08", title: "Email Automation", href: "/services/email-automation", desc: "We write email sequences that sound like a real person, not a marketing robot. Leads flow through your pipeline on autopilot. No more writing \"just checking in\" emails by hand.", price: "$199 setup + $49/mo" },
  { num: "09", title: "Google Business", href: "/services/google-business", desc: "If you're not showing up on Google Maps, your competitors are getting those calls. We optimize your profile so local customers find you first. Better visibility means more phone calls.", price: "$399 one-time" },
  { num: "10", title: "Review Response", href: "/services/review-response", desc: "Every review gets a thoughtful, personalized reply within 24 hours. Positive ones get thanked. Negative ones get handled professionally. All of it runs on autopilot.", price: "$99/mo" },
];

const stats = [
  { value: "7", unit: "Days", label: "To First Results" },
  { value: "500", unit: "+", label: "Businesses Helped" },
  { value: "3", unit: "×", label: "Average Lead Growth" },
  { value: "95", unit: "%", label: "Client Retention" },
];

const whys = [
  { marker: "01 · WHY", title: "Fast Implementation.", desc: "Most clients are up and running within a week. We don't waste time." },
  { marker: "02 · WHY", title: "Month-to-Month.", desc: "No long-term contracts. Cancel anytime. We earn your business every single month." },
  { marker: "03 · WHY", title: "Transparent Reporting.", desc: "Every lead and booking is tracked. You always know exactly what's working." },
  { marker: "04 · WHY", title: "Direct Support.", desc: "A real person picks up when you call. Questions get answered quickly and clearly." },
];

const testimonials = [
  { quote: "We went from about 10 leads a week to over 100. The AI chatbot runs around the clock and books appointments while I sleep. AMP Marketing completely changed how we get new business.", author: "Mike R.", company: "HVAC Company Owner" },
  { quote: "We've worked with several agencies before. These guys actually deliver, and fast. They care about results, not just collecting a monthly check.", author: "Sarah L.", company: "Dental Practice" },
  { quote: "Our lead generation was basically nonexistent before AMP Marketing stepped in. Now our pipeline stays full and the phone keeps ringing with qualified prospects.", author: "James T.", company: "Local Restaurant Owner" },
  { quote: "The AI voice receptionist paid for itself in the first month. We used to miss about 20% of our calls. Now every single one gets answered professionally, 24/7.", author: "Amanda K.", company: "Law Firm" },
  { quote: "Email automation changed everything for us. We used to spend hours every week on manual follow-ups. Now it runs on its own, and our close rate went up 40%.", author: "David M.", company: "Real Estate Agency" },
  { quote: "Their AI tools save us around 30 hours a week. That's not a typo. Best investment we've ever made, hands down.", author: "Jennifer P.", company: "E-commerce Business" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="hero">
        <div className="shell">
          <div className="meta-strip fade-up">
            <span className="pill">ai-native</span>
            <span className="pill">nashua, nh</span>
            <span className="pill">month-to-month</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            AI That Works<br />
            <em>for Your Business.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            More Leads, Less Busywork. We make high-tech tools that attract leads, take your calls, and take care of your boring tasks even if you are sleeping. No complicated technical jargon. Just good results.
          </p>
          <div className="hero-actions fade-up" style={{ animationDelay: '0.18s' }}>
            <Link href="/contact" className="btn btn-primary">→ see if we&apos;re a good fit</Link>
            <Link href="/pricing" className="btn btn-ghost">see our pricing</Link>
          </div>
          <div className="hero-sub fade-up" style={{ animationDelay: '0.24s', marginTop: '48px' }}>
            <span>trusted by</span>
            <span className="dotsep">·</span>
            <span>GOOGLE</span>
            <span className="dotsep">·</span>
            <span>META</span>
            <span className="dotsep">·</span>
            <span>SHOPIFY</span>
            <span className="dotsep">·</span>
            <span>HUBSPOT</span>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {[1, 2].map((pass) => (
            <span key={pass} style={{ display: 'contents' }}>
              <span className="accent">AI CHATBOT</span><span className="bul"> · </span>
              <span>AI VOICE</span><span className="bul"> · </span>
              <span className="accent">LEAD FUNNELS</span><span className="bul"> · </span>
              <span>SEO CONTENT</span><span className="bul"> · </span>
              <span className="accent">EMAIL AUTOMATION</span><span className="bul"> · </span>
              <span>LANDING PAGES</span><span className="bul"> · </span>
              <span className="accent">SOCIAL MEDIA</span><span className="bul"> · </span>
              <span>AD COPY</span><span className="bul"> · </span>
              <span className="accent">GOOGLE BUSINESS</span><span className="bul"> · </span>
              <span>REVIEW RESPONSE</span><span className="bul"> · </span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">by the numbers</div>
            <h2>Results our clients<br />actually see.</h2>
          </div>
          <div className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="num">{stat.value}<em>{stat.unit}</em></div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">02 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">all services</div>
            <h2>All the things we can<br />do for you.</h2>
            <p className="lede">If it turns out AI is able to get you more customers or save your time, we may have just built it. See what we have here.</p>
          </div>
          <div className="shape-row">
            {services.map((svc) => (
              <Link key={svc.num} href={svc.href} className="shape">
                <span className="shape-arrow">↗</span>
                <div className="shape-meta">
                  <span className="num">SHAPE · {svc.num}</span>
                  <span className="bul">·</span>
                  <span>{svc.title.toLowerCase()}</span>
                </div>
                <h3>{svc.title}.</h3>
                <p>{svc.desc}</p>
                <dl className="shape-dl">
                  <dt>from</dt>
                  <dd><span className="accent">{svc.price}</span></dd>
                </dl>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">03 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">why people work with us</div>
            <h2>No long-term contracts.<br />Just results.</h2>
          </div>
          <div className="whys">
            {whys.map((why) => (
              <div className="why" key={why.marker}>
                <div className="marker">{why.marker}</div>
                <h3>{why.title}</h3>
                <p>{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">04 / 04</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">voices</div>
            <h2>What our clients say.</h2>
            <p className="lede">Don&apos;t just believe us. Let real clients be the judge.</p>
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

      {/* Closing CTA */}
      <section className="closing">
        <div className="shell">
          <div className="section-head" data-reveal>
            <div className="eyebrow">→ ready to grow?</div>
            <h2>Want More<br />Customers?</h2>
            <p className="lede">We have hundreds of businesses under our belt. Let&apos;s have a brief chat and check whether we may be able to assist you too. No pressure and no sales pitch.</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ book a free call</Link>
            <Link href="/services" className="btn btn-ghost">see all services</Link>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', letterSpacing: '0.04em', marginTop: '24px' }}>
            15 minutes, no pressure. we&apos;ll discuss your goals and see if we&apos;re the right fit.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
