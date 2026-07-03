export default function ArticleBody({ html }: { html: string }) {
  return (
    <article
      className="prose prose-slate prose-content mx-auto max-w-3xl px-4 py-8 dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
