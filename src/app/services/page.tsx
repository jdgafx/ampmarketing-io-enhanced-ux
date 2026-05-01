import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Solutions & Services",
  description: "Help with AI to grow your business and increase the leads. We build tools that work from attracting customers to handling calls.",
  keywords: ["AI marketing services", "business automation services", "lead generation tools", "AI chatbot service", "AI voice receptionist service", "marketing automation agency", "Nashua NH marketing services", "Bing Ads management services", "Google Ads management services", "AI-powered marketing solutions", "automated sales tools for business", "digital marketing services near me", "best AI marketing tools 2025"],
};

const services = [
  { num: "01", title: "AI Assisted Leadgen", desc: "AI finds your ideal clients across social media and ad platforms. Your sales funnel stays full so you can focus on closing deals.", price: "$1,499 setup + $299/mo", href: "/services/lead-funnel", ship: "7 days", engine: "chatbot · messenger · linkedin" },
  { num: "02", title: "SEO Content", desc: "We research and write articles that rank well on Google. Fresh content that brings in organic traffic month after month.", price: "$149 per article", href: "/services/seo-content", ship: "3 days", engine: "research · write · publish" },
  { num: "03", title: "AI Voice", desc: "Our AI answers calls, qualifies leads, and books appointments around the clock. Works for both inbound and outbound calls.", price: "$497 setup + $249/mo", href: "/services/ai-voice", ship: "48 hrs", engine: "inbound · outbound · book" },
  { num: "04", title: "Landing Pages", desc: "You have about 3 seconds before a visitor leaves. We build pages that load fast, look sharp, and turn browsers into buyers.", price: "$799 one-time", href: "/services/landing-pages", ship: "5 days", engine: "design · copy · launch" },
  { num: "05", title: "AI Chatbot", desc: "Most chatbots are terrible. Ours actually books meetings and sounds like a real person. Clients typically see more qualified leads within the first week.", price: "$497 setup + $149/mo", href: "/services/ai-chatbot", ship: "7 days", engine: "qualify · book · learn" },
  { num: "06", title: "Social Media", desc: "Consistent posting builds your brand, but it takes time you don't have. We handle it so you can focus on running your business.", price: "$299/mo", href: "/services/social-media", ship: "3 days", engine: "write · schedule · engage" },
  { num: "07", title: "Ad Copy", desc: "Bad ads waste money. We write compelling headlines, test variations, and keep optimizing until your cost per lead drops. Works across 100+ ad platforms.", price: "$299 setup + $199/mo", href: "/services/ad-copy", ship: "3 days", engine: "google · meta · linkedin" },
  { num: "08", title: "Email Automation", desc: "Nobody reads generic follow-up emails. Ours sound personal and human, and they actually get responses.", price: "$199 setup + $49/mo", href: "/services/email-automation", ship: "7 days", engine: "sequence · trigger · convert" },
  { num: "09", title: "Google Business", desc: "If people can't find you on Google Maps, they're finding your competitors instead. We optimize your profile so local customers see you first.", price: "$399 one-time", href: "/services/google-business", ship: "2 days", engine: "optimize · rank · track" },
  { num: "10", title: "Review Response", desc: "Responding to every review takes time. Our AI reads each one and writes a personalized reply. Good reviews get thanked. Bad ones get handled professionally.", price: "$99/mo", href: "/services/review-response", ship: "24 hrs", engine: "monitor · respond · protect" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">AMP MARKETING</span>
            <span className="bul">·</span>
            <span>services</span>
            <span className="bul">·</span>
            <span>ai-native</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            Marketing That<br />
            <em>Gets Results.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            More leads. Less busywork. We build AI tools that save you time and bring in customers.
          </p>
        </div>
      </header>

      {/* All Services Grid */}
      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 02</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">all services</div>
            <h2>Everything we build<br />for your business.</h2>
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
                  <dt>ship</dt>
                  <dd>{svc.ship}</dd>
                  <dt>engine</dt>
                  <dd><span className="accent">{svc.engine}</span></dd>
                  <dt>from</dt>
                  <dd><span className="accent">{svc.price}</span></dd>
                </dl>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="closing">
        <div className="shell">
          <span className="section-counter">02 / 02</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">→ not sure what you need?</div>
            <h2>Let&apos;s Figure It<br />Out Together.</h2>
            <p className="lede">Let&apos;s meet for 15 minutes. No selling — we will just decide what makes sense for you.</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ book a free call</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
