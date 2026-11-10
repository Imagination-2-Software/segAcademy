import { createFileRoute, Link } from "@tanstack/react-router";
import { brand } from "@/data/seg";

const title = "Terms & Conditions | SEG Academy Varanasi";
const description =
  "Terms of use for the SEG Academy website and information about our stock market education programs in Varanasi.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
      <Link to="/" className="text-sm font-semibold text-brand-strong">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-extrabold text-ink">Terms &amp; Conditions</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          SEG Academy provides stock market education and training. Nothing on this website is
          investment advice, a recommendation to buy or sell, or a promise of any financial outcome.
        </p>
        <p>
          Trading and investing in financial markets carry risk. Learners are responsible for their
          own decisions in the market.
        </p>
        <p>
          Course details, schedules and fees are confirmed by the academy at the time of enrolment.
          Call {brand.phone} for current information.
        </p>
        <p className="text-xs">
          This is a starting document for the SEG Academy team to review and expand with their exact
          enrolment, fee and refund policies.
        </p>
      </div>
    </main>
  );
}
