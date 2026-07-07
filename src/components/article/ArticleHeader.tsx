interface ArticleHeaderProps {
  title: string;
  category: string;
  slug: string;
}

export default function ArticleHeader({ title, category, slug }: ArticleHeaderProps) {
  const editHref = `https://github.com/WheatBeer/WheatBeer.github.io/edit/master/src/content/posts/${slug}.md`;

  return (
    <div className="mx-auto max-w-3xl px-4 pt-10">
      <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{category}</h3>
      <div className="mt-1 flex items-center justify-between gap-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
        <a
          href={editHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-xs text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          aria-label="Edit this page on GitHub"
        >
          edit
        </a>
      </div>
      <hr className="mt-4 border-slate-200 dark:border-slate-800" />
    </div>
  );
}
