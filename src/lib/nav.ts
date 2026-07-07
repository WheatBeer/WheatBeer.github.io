import { getAllContentMeta, type ContentMeta } from "./content";

export interface NavItem {
  slug: string;
  title: string;
  href: string;
}

export interface NavCategory {
  name: string;
  items: NavItem[];
}

const CATEGORY_ORDER = ["AI", "TRADING", "HOMELAB"];

function toNavItem(meta: ContentMeta): NavItem {
  return { slug: meta.slug, title: meta.title, href: `/${meta.slug}/` };
}

export function getNavCategories(): NavCategory[] {
  const all = getAllContentMeta();

  return CATEGORY_ORDER.map((name) => ({
    name,
    items: all
      .filter((meta) => meta.category === name)
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
      .map(toNavItem),
  }));
}
