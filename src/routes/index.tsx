import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/Stats";
import { CourseGrid } from "@/components/Courses";
import { TeamSection } from "@/components/TeamSection";
import { BranchesSection } from "@/components/BranchesSection";
import { StudentStories } from "@/components/StudentStories";
import {
  DarkValueSection,
  LearningAreas,
  LocationSection,
  WhySeg,
} from "@/components/Sections";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { brand, faqs, rating } from "@/data/seg";

const title = "SEG Academy | Stock Market Training Institute in Varanasi";
const description =
  "Learn stock market trading and investing with SEG Academy, a premier stock market training institute in Varanasi offering structured courses, practical learning and expert guidance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: brand.name,
          description: brand.tagline,
          telephone: brand.phone,
          url: `https://${brand.website}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "3rd Floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, Mahmoorganj",
            addressLocality: "Varanasi",
            addressRegion: "Uttar Pradesh",
            postalCode: "221002",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: rating.score,
            reviewCount: rating.reviews,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <CourseGrid />
        <DarkValueSection />
        <WhySeg />
        <TeamSection />
        <LearningAreas />
        <BranchesSection />
        <StudentStories />
        <LocationSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
