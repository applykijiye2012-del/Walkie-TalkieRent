import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import {
  BenefitsSection,
  CaseStudiesSection,
  ContactSection,
  FaqSection,
  FinalCtaSection,
  MetricsSection,
  ProblemSection,
  ProcessSection,
  ServicesSection,
  SolutionSection,
  TestimonialsSection,
} from "@/components/sections/landing-sections";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RentalXgogo",
    url: "https://rentalxgogo.com",
    description:
      "AI and n8n automation company helping businesses automate lead capture, CRM updates, follow-ups, internal workflows, and business process optimization.",
    serviceType: [
      "n8n automation",
      "AI workflow automation",
      "CRM automation",
      "Lead capture automation",
      "Business process automation",
    ],
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <MetricsSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ProcessSection />
        <BenefitsSection />
        <FaqSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
