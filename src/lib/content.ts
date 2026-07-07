import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "posts");

export interface ContentMeta {
  slug: string;
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

function slugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllContentMeta(): ContentMeta[] {
  return slugs().map((slug) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.md`), "utf8");
    const { data } = matter(raw) as unknown as { data: Frontmatter };
    return {
      slug,
      title: data.title,
      category: data.category,
      order: data.order ?? 0,
    };
  });
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
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

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
    title: data.title,
    category: data.category,
    order: data.order ?? 0,
    html,
  };
}

export function getAllSlugs(): string[] {
  return slugs();
}
