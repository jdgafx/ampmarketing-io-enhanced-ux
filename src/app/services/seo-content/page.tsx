import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content That Ranks",
  description: "Expert articles your audience will read and trust. Boost your site traffic with well-researched, SEO-optimized content.",
  keywords: ["SEO content writing service", "SEO articles for business", "content marketing services", "blog writing service", "organic traffic growth", "keyword-optimized content", "SEO copywriting agency", "AI-assisted SEO writing", "long-form SEO content", "rank on Google with content", "SEO blog posts for small business", "content marketing agency", "best SEO writing service 2025", "Bing search ranking content"],
  openGraph: {
    title: "SEO Content Writing | AMP Marketing",
    description: "Expert articles your audience will read and trust. Boost your site traffic with well-researched, SEO-optimized content.",
    url: "https://ampmarketing-io-enhanced-ux.netlify.app/services/seo-content",
    type: "website",
  },
  alternates: {
    canonical: "https://ampmarketing-io-enhanced-ux.netlify.app/services/seo-content",
  },
};

const faqs = [
  { q: "How do you decide what to write about?", a: "We research what your competitors rank for, analyze the questions your customers are asking, and identify which search terms are driving real traffic. We include you in every content decision before writing begins—so there are no surprises." },
  { q: "Do you guarantee first page rankings?", a: "No reputable agency can guarantee specific rankings—anyone who does is being misleading. What we do guarantee is well-researched, expertly written content that follows SEO best practices. Rankings depend on many factors including competition, domain authority, and site age, but strong content is the foundation of every successful strategy." },
  { q: "Can you post the articles on my website?", a: "Certainly. WordPress, Wix, Squarespace, etc. we can log in and post it, or just give you the content to upload yourself. Whatever is most convenient for you." },
  { q: "Which type of articles are best?", a: "How-to guides, industry explainers, product comparisons, and FAQ pages tend to perform best. The common thread is that they answer the specific questions your target audience is searching for." },
];

export default function SeoContentPage() {
  return (
    <>
      <Navbar />

      <header className="svc-hero">
        <div className="shell">
          <div className="shape-meta fade-up">
            <span className="num">SHAPE · 02</span>
            <span className="bul">·</span>
            <span>seo-content</span>
            <span className="bul">·</span>
            <span>ai-assisted</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: '0.05s' }}>
            Content That<br />
            <em>Ranks.</em>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: '0.1s' }}>
            We write articles that your target audience will read, share, and trust. We discover the questions your buyers are asking and provide clear answers. No fluff, no keyword stuffing—just helpful information that steadily brings traffic to your website.
          </p>
          <dl className="svc-meta-dl fade-up" style={{ animationDelay: '0.18s' }}>
            <div><dt>ship</dt><dd>3 days</dd></div>
            <div><dt>best for</dt><dd>organic growth</dd></div>
            <div><dt>engine</dt><dd>research · write · publish</dd></div>
            <div><dt>handoff</dt><dd>article · meta · structure</dd></div>
          </dl>
        </div>
      </header>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">01 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">the spec / what we actually ship</div>
            <h2>What Goes Into<br />Every Article.</h2>
          </div>
          <div className="two-col" data-reveal>
            <div>
              <p className="lede" style={{ marginBottom: '28px' }}>Some pages attract steady traffic for years. Others get zero visitors. The difference is strategy. We write for your audience first and search engines second—so your content performs on both fronts.</p>
              <ul className="checklist">
                <li>Around 2,000 words of in-depth content that fully answers the search query. No filler, no padding.</li>
                <li>We don&apos;t guess at keywords. We dig into ones with real search volume—actual opportunities, not made-up nonsense.</li>
                <li>Strategic internal linking that connects related pages on your site, helping both readers and search engines navigate your content.</li>
                <li>Compelling meta descriptions—the preview text shown in Google search results—written to grab attention and drive clicks to your page.</li>
                <li>Titles that sound appealing to the reader while simultaneously being friendly to search engines.</li>
                <li>Every article is delivered publish-ready and formatted for your platform—WordPress, Wix, Squarespace, or any other CMS you use.</li>
              </ul>
            </div>
            <aside className="price-card">
              <div className="label">pricing · transparent</div>
              <div className="price">from <em>$149</em>/article</div>
              <div className="sub">One-time fee per article. Or $499/month for 4 new articles delivered each month.</div>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>→ order article</Link>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--amp-muted)', textAlign: 'center', marginTop: '18px', letterSpacing: '0.04em' }}>one-time fee per article.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section tight section-rule">
        <div className="shell">
          <span className="section-counter">02 / 03</span>
          <div className="section-head" data-reveal>
            <div className="eyebrow">straight answers</div>
            <h2>Before You Ask.</h2>
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
            <div className="eyebrow">→ organic traffic that converts</div>
            <h2>Content That<br />Compounds.</h2>
            <p className="lede">A home services client went from getting 300 visitors per month to 3,000 in only 4 months. It was the right content in the right way that made it happen.</p>
          </div>
          <div className="closing-actions" data-reveal>
            <Link href="/contact" className="btn btn-primary">→ write my first article</Link>
            <Link href="/services" className="btn btn-ghost">← all services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
