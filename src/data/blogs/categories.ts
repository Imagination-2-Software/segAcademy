import { BlogCategory } from "./types";
import indianCatImg from "@/assets/blogs/indian-stock-market-cat.jpg";
import globalCatImg from "@/assets/blogs/global-stock-market-cat.jpg";
import cryptoCatImg from "@/assets/blogs/crypto-market-cat.jpg";

export const blogCategories: BlogCategory[] = [
  {
    id: "indian-stock-market",
    slug: "indian-stock-market",
    title: "Indian Stock Market",
    shortTitle: "Indian Equities",
    description:
      "Explore India's equity markets, understand how stock exchanges work, analyse companies and learn essential investment concepts.",
    coverImage: indianCatImg,
    coverAlt: "Indian Stock Market indices, NSE BSE charts and equity trading ecosystem",
    articleCountText: "4 Comprehensive Guides",
    badge: "NSE & BSE EQUITIES",
    isComingSoon: false,
  },
  {
    id: "global-stock-market",
    slug: "global-stock-market",
    title: "Global Stock Market",
    shortTitle: "Global Markets",
    description:
      "Discover international financial markets, global indices, major exchanges and the economic forces influencing worldwide investing.",
    coverImage: globalCatImg,
    coverAlt: "Global financial market connections, international indices and world exchanges",
    articleCountText: "Articles Coming Soon",
    badge: "INTERNATIONAL MARKETS",
    isComingSoon: true,
  },
  {
    id: "cryptocurrency-market",
    slug: "cryptocurrency-market",
    title: "Cryptocurrency Market",
    shortTitle: "Digital Assets",
    description:
      "Understand digital assets, blockchain technology, cryptocurrency markets and the opportunities and risks associated with this evolving ecosystem.",
    coverImage: cryptoCatImg,
    coverAlt: "Cryptocurrency blockchain networks, cryptographic tokens and digital financial architecture",
    articleCountText: "1 Comprehensive Guide",
    badge: "BLOCKCHAIN & DIGITAL ASSETS",
    isComingSoon: false,
  },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((cat) => cat.slug === slug);
}

