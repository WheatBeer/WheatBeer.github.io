import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

export type ContentType = "docs" | "projects" | "research";

const CONTENT_TYPES: ContentType[] = ["docs", "projects", "research"];

const TYPE_LABELS: Record<ContentType, string> = {
  docs: "Documents",
  projects: "Projects",
  research: "Research",
};

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

export interface ContentMeta {
  slug: string;
  type: ContentType;
  typeLabel: string;
  title: string;
  category: string;
  order: number;
}

export interface ContentEntry extends ContentMeta {
  html: string;
}

interface Frontmatter {
  title: string;
  category: string;
  order?: number;
  externalSource?: string;
}

function markdownToHtml(markdown: string): Promise<string> {
  return unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)
    .then((file) => String(file));
}

function slugsForType(type: ContentType): string[] {
  const dir = path.join(CONTENT_DIR, type);
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllContentMeta(): ContentMeta[] {
  const entries: ContentMeta[] = [];
  for (const type of CONTENT_TYPES) {
    for (const slug of slugsForType(type)) {
      const filePath = path.join(CONTENT_DIR, type, `${slug}.md`);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw) as unknown as { data: Frontmatter };
      entries.push({
        slug,
        type,
        typeLabel: TYPE_LABELS[type],
        title: data.title,
        category: data.category,
        order: data.order ?? 0,
      });
    }
  }
  return entries;
}

async function fetchExternalHtml(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch external source ${url}: ${res.status}`);
  }
  const markdown = await res.text();
  return markdownToHtml(markdown);
}

export async function getContentBySlug(slug: string): Promise<ContentEntry | null> {
  for (const type of CONTENT_TYPES) {
    const filePath = path.join(CONTENT_DIR, type, `${slug}.md`);
    if (!fs.existsSync(filePath)) continue;

    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw) as unknown as {
      data: Frontmatter;
      content: string;
    };

    let html = await markdownToHtml(content);
    if (data.externalSource) {
      const externalHtml = await fetchExternalHtml(data.externalSource);
      html += externalHtml;
    }

    return {
      slug,
      type,
      typeLabel: TYPE_LABELS[type],
      title: data.title,
      category: data.category,
      order: data.order ?? 0,
      html,
    };
  }
  return null;
}

export function getAllSlugs(): string[] {
  return getAllContentMeta().map((entry) => entry.slug);
}
