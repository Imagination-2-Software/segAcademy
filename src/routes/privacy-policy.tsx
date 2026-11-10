import { createFileRoute, Link } from "@tanstack/react-router";
import { brand } from "@/data/seg";

const title = "Privacy Policy | SEG Academy Varanasi";
const description =
  "How SEG Academy, a stock market training institute in Varanasi, collects and uses the information you share with us.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
      <Link to="/" className="text-sm font-semibold text-brand-strong">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-extrabold text-ink">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          SEG Academy collects only the details you choose to share with us — such as your name and
          phone number — when you enquire about a course or visit our campus.
        </p>
        <p>
          We use those details to respond to your enquiry and to share information about our
          programs. We do not sell your information to third parties.
        </p>
        <p>
          To ask a question about your information, or to have it removed from our records, call us
          on {brand.phone}.
        </p>
        <p className="text-xs">
          This is a starting policy for the SEG Academy team to review and expand with their exact
          data-handling practices.
        </p>
      </div>
    </main>
  );
}
