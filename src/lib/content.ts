import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import { toString as hastToString } from "hast-util-to-string";
import type { Root, Element } from "hast";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "posts");

export interface ContentMeta {
  slug: string;
  title: string;
  group: string;
  category: string;
  order: number;
}

export interface ContentEntry extends ContentMeta {
  html: string;
}

interface Frontmatter {
  title: string;
  group: string;
  category: string;
  order?: number;
  externalSource?: string;
}

/**
 * Legacy content authored a bare heading like "#### bg" purely to give kramdown's
 * auto-generated id something to anchor to, immediately followed by the real
 * visible heading (e.g. "### Background"). Hide the anchor-only heading visually
 * (keeping its id so in-page links still work) instead of showing it as a
 * duplicate heading.
 */
function hideAnchorOnlyHeadings() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (!parent || index === undefined || !/^h[1-6]$/.test(node.tagName)) return;

      const text = hastToString(node).trim();
      const isSlugOnly = /^[a-z][a-z0-9-]*$/.test(text);
      if (!isSlugOnly) return;

      let i = index + 1;
      while (i < parent.children.length) {
        const sibling = parent.children[i];
        if (sibling.type === "text" && !sibling.value.trim()) {
          i += 1;
          continue;
        }
        break;
      }
      const next = parent.children[i];
      const nextIsHeading = next?.type === "element" && /^h[1-6]$/.test(next.tagName);

      if (nextIsHeading) {
        const existingClass = node.properties?.className;
        node.properties = {
          ...node.properties,
          className: [...(Array.isArray(existingClass) ? existingClass : []), "sr-only"],
        };
      }
    });
  };
}

function markdownToHtml(markdown: string): Promise<string> {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(hideAnchorOnlyHeadings)
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
      group: data.group,
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
    group: data.group,
    category: data.category,
    order: data.order ?? 0,
    html,
  };
}

export function getAllSlugs(): string[] {
  return slugs();
}
