export type BlogCategorySlug =
  | "indian-stock-market"
  | "global-stock-market"
  | "cryptocurrency-market";

export interface BlogCategory {
  id: string;
  slug: BlogCategorySlug;
  title: string;
  shortTitle: string;
  description: string;
  coverImage: string;
  coverAlt: string;
  articleCountText: string;
  badge: string;
  isComingSoon?: boolean;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level?: number;
}

export interface BlogSource {
  title: string;
  url?: string;
  note?: string;
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  categorySlug: BlogCategorySlug;
  categoryName: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  author: {
    name: string;
    role: string;
    verified: boolean;
  };
  tableOfContents: TableOfContentsItem[];
  sources: BlogSource[];
  faqs: BlogFaq[];
  tags: string[];
}

