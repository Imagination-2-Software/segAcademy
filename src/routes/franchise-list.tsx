import { createFileRoute } from "@tanstack/react-router";
import { BranchListPage } from "./branch-list";

const title = "Branch List | Verified Study Centres | SEG Academy";
const description =
  "Official Branch & Study Centre Directory of SEG Academy. Explore and search verified stock market trading laboratories, regional centers and academic associate institutes across India.";

export const Route = createFileRoute("/franchise-list")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/branch-list" },
    ],
    links: [{ rel: "canonical", href: "/branch-list" }],
  }),
  component: BranchListPage,
});
