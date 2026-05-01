import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Consultation & 7-Day Trial",
  description: "Get in touch with AMP Marketing. Schedule a free consultation or start your 7-day trial. Located in Nashua, NH. Call 617-651-1457 or email hello@ampmarketing.io.",
  keywords: ["contact AMP Marketing", "marketing consultation", "free marketing trial", "Nashua NH marketing agency contact", "AI marketing demo", "lead generation consultation", "schedule marketing call", "free AI marketing assessment", "book marketing agency call", "marketing agency near me contact"],
  openGraph: {
    title: "Contact Us | Let's Grow Your Business",
    description: "Schedule a free consultation or start your 7-day trial. Call 617-651-1457 or fill out our contact form.",
    url: "https://ampmarketing-io-enhanced-ux.netlify.app/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
