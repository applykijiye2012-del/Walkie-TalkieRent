import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://rentalxgogo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RentalXgogo | AI & n8n Automation for Business Workflows",
    template: "%s | RentalXgogo",
  },
  description:
    "RentalXgogo builds AI and n8n automation systems for lead capture, CRM updates, email follow-ups, internal workflows, and business process optimization.",
  keywords: [
    "AI automation company",
    "n8n automation",
    "business process automation",
    "CRM automation",
    "lead capture automation",
    "AI email follow ups",
  ],
  authors: [{ name: "RentalXgogo" }],
  creator: "RentalXgogo",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "RentalXgogo",
    title: "RentalXgogo | AI & n8n Automation for Business Workflows",
    description:
      "Automate repetitive workflows with AI and n8n systems that capture leads, sync CRMs, trigger follow-ups, and optimize operations.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "RentalXgogo AI automation workflow dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentalXgogo | AI & n8n Automation",
    description:
      "High-ROI AI and n8n workflow automation for faster lead response and cleaner operations.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#020617] text-slate-100">{children}</body>
    </html>
  );
}
