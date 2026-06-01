import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rentalxgogo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RentalXgogo | Wireless Walkie-Talkie Rentals in Mumbai",
  description:
    "Rent wireless walkie-talkies in Mumbai for weddings, events, security teams, construction sites, hotels, schools, warehouses, and production teams.",
  keywords: [
    "walkie talkie rental Mumbai",
    "wireless walkie talkie rental",
    "event radio rental",
    "wedding walkie talkie rental",
    "security walkie talkie rental",
    "Santacruz walkie talkie rental",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "RentalXgogo",
    title: "RentalXgogo | Wireless Walkie-Talkie Rentals in Mumbai",
    description:
      "Wireless walkie-talkie rental kits with earpieces, chargers, setup support, WhatsApp booking, and Mumbai delivery options.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "RentalXgogo walkie-talkie rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentalXgogo | Walkie-Talkie Rentals",
    description:
      "Rent walkie-talkies for weddings, events, security, venues, and worksites in Mumbai.",
    images: ["/og-image.svg"],
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
    <html lang="en" className="scroll-smooth antialiased">
      <body>{children}</body>
    </html>
  );
}
