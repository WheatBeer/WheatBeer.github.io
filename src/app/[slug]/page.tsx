import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getContentBySlug } from "@/lib/content";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleBody from "@/components/article/ArticleBody";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getContentBySlug(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: `${entry.title} — ${entry.category}`,
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await getContentBySlug(slug);
  if (!entry) notFound();

  return (
    <>
      <ArticleHeader
        title={entry.title}
        category={entry.category}
        editSlug={entry.slug}
        editType={entry.type}
      />
      <ArticleBody html={entry.html} />
    </>
  );
}
