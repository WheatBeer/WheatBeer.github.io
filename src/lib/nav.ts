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

export interface NavGroup {
  name: string;
  categories: NavCategory[];
}

const GROUP_STRUCTURE: { name: string; categories: string[] }[] = [
  { name: "AI", categories: ["HOMELAB", "TRADING"] },
  { name: "Projects", categories: ["Yonsei"] },
  { name: "Research", categories: ["AI Accelerator (NPU)", "Simulators"] },
];

function toNavItem(meta: ContentMeta): NavItem {
  return { slug: meta.slug, title: meta.title, href: `/${meta.slug}/` };
}

export function getNavGroups(): NavGroup[] {
  const all = getAllContentMeta();

  return GROUP_STRUCTURE.map((group) => ({
    name: group.name,
    categories: group.categories.map((categoryName) => ({
      name: categoryName,
      items: all
        .filter((meta) => meta.group === group.name && meta.category === categoryName)
        .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
        .map(toNavItem),
    })),
  }));
}
