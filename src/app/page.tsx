import { WalkieTalkieSite } from "@/components/walkie-talkie-site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RentalXgogo",
    url: "https://rentalxgogo.com",
    telephone: "9140968645",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Datta Mandir Rd, Demello Compound, Vakola, Santacruz East",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400055",
      addressCountry: "IN",
    },
    description:
      "Wireless walkie-talkie rentals in Mumbai for weddings, events, security teams, construction sites, hotels, schools, warehouses, and production teams.",
    areaServed: ["Mumbai", "Andheri", "Bandra", "Juhu", "Goregaon", "Powai", "Worli", "Malad", "Santacruz", "Panvel"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WalkieTalkieSite />
    </>
  );
}
