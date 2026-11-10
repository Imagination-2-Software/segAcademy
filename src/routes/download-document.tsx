import { createFileRoute } from "@tanstack/react-router";
import { DownloadDocumentPage } from "./download";

const title = "Download Document | Official Academic Resources | SEG Academy";
const description =
  "Official Document Download Library of SEG Academy. Access and download verified course syllabi, institutional guidelines, and academic brochures.";

export const Route = createFileRoute("/download-document")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/download" },
    ],
    links: [{ rel: "canonical", href: "/download" }],
  }),
  component: DownloadDocumentPage,
});

