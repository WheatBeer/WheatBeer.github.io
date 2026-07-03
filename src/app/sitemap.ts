import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/content";

export const dynamic = "force-static";

const BASE_URL = "https://WheatBeer.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [{ url: `${BASE_URL}/` }];
  const contentEntries: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${BASE_URL}/${slug}/`,
  }));
  return [...staticEntries, ...contentEntries];
}
