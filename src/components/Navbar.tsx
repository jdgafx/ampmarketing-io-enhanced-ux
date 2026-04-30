'use client';

import { useState } from 'react';
import Link from 'next/link';

const BrandSvg = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ampGradNav" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="55%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="ampGradSoftNav" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.35" />
      </linearGradient>
    </defs>
    <circle className="pulse" cx="20" cy="20" r="17" fill="url(#ampGradSoftNav)" opacity="0.6" />
    <path d="M7 32 L20 6 L33 32" stroke="url(#ampGradNav)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M11.5 22 Q14.5 17, 17 22 T22 22 T28.5 22" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="20" cy="22" r="1.8" fill="#E2E8F0" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="tape-top">
        <div className="shell">
          <div>ai marketing systems that <strong>actually ship</strong> <span className="dotsep">·</span> month-to-month</div>
          <div>amp marketing · est nashua, nh · <strong>v2.0</strong></div>
        </div>
      </div>

      <nav className="nav">
        <div className="shell">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              <BrandSvg />
            </span>
            <span className="brand-word">
              <span className="word">A<em>m</em>p<span style={{ opacity: 0.55 }}> · </span>marketing</span>
              <span className="tag">amplify your pipeline</span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/services">services</Link>
            <Link href="/pricing">pricing</Link>
            <Link href="/about">about</Link>
            <Link href="/blog">blog</Link>
            <Link href="/contact" className="cta">→ book a free call</Link>
          </div>

          <button
            className="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="shell">
            <div className="nav-mobile-menu" style={{ display: 'flex' }}>
              <Link href="/services" onClick={() => setOpen(false)}>services</Link>
              <Link href="/pricing" onClick={() => setOpen(false)}>pricing</Link>
              <Link href="/about" onClick={() => setOpen(false)}>about</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>blog</Link>
              <Link href="/contact" className="cta" onClick={() => setOpen(false)}>→ book a free call</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
