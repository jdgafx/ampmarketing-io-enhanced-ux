import Link from 'next/link';

const BrandSvgFooter = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ampGradF" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="60%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M7 32 L20 6 L33 32" stroke="url(#ampGradF)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M11.5 22 Q14.5 17, 17 22 T22 22 T28.5 22" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <span className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <BrandSvgFooter />
          </span>
          <span>amp marketing · nashua, nh · 2026 · ai-native</span>
        </span>
        <div className="links">
          <Link href="/services">services</Link>
          <span className="dotsep">·</span>
          <a href="mailto:hello@ampmarketing.io">email</a>
          <span className="dotsep">·</span>
          <a href="tel:6176511457">617-651-1457</a>
          <span className="dotsep">·</span>
          <Link href="/blog">blog</Link>
          <span className="dotsep">·</span>
          <Link href="/contact">contact</Link>
        </div>
      </div>
    </footer>
  );
}
