import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

const title = "Contact Us | SEG Academy | Financial Markets Training Institute";
const description =
  "Get in touch with SEG Academy, India's premier stock market and financial education institute in Mahmoorganj, Varanasi. Enquire about trading courses, campus visits, franchise partnerships, and student admissions.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Signature Contact Us Hero */}
          <ContactHero
            title="CONTACT"
            subtitle="We'd love to hear from you. Get in touch with SEG Academy for course enquiries, admissions, partnerships and general assistance."
            badge="GET IN TOUCH"
          />

          {/* Main Two-Column Layout (Desktop: Left ~58%, Right ~42%) */}
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
              {/* Left Column: Contact Form (~58%) */}
              <div className="w-full lg:w-[58%]">
                <ContactForm />
              </div>

              {/* Right Column: Contact Details, Google Maps & Quick Actions (~42%) */}
              <div className="w-full lg:w-[42%]">
                <ContactInfo />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

