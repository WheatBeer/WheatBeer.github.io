import { getAllContentMeta, type ContentMeta, type ContentType } from "./content";

export interface NavItem {
  slug: string;
  title: string;
  href: string;
}

export interface NavCategory {
  name: string;
  items: NavItem[];
}

export interface NavGroup {
  type: ContentType;
  label: string;
  categories: NavCategory[];
}

function toNavItem(meta: ContentMeta): NavItem {
  return { slug: meta.slug, title: meta.title, href: `/${meta.slug}/` };
}

export function getNavGroups(): NavGroup[] {
  const all = getAllContentMeta();
  const types: ContentType[] = ["docs", "projects", "research"];

  return types.map((type) => {
    const entries = all.filter((meta) => meta.type === type);
    const categoryOrder: string[] = [];
    const byCategory = new Map<string, ContentMeta[]>();

    for (const meta of entries) {
      if (!byCategory.has(meta.category)) {
        categoryOrder.push(meta.category);
        byCategory.set(meta.category, []);
      }
      byCategory.get(meta.category)!.push(meta);
    }

    const categories: NavCategory[] = categoryOrder.map((name) => ({
      name,
      items: byCategory
        .get(name)!
        .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
        .map(toNavItem),
    }));

    return {
      type,
      label: entries[0]?.typeLabel ?? type,
      categories,
    };
  });
}
