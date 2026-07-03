interface ArticleHeaderProps {
  title: string;
  category: string;
  editSlug: string;
  editType: string;
}

export default function ArticleHeader({ title, category, editSlug, editType }: ArticleHeaderProps) {
  const editHref = `https://github.com/WheatBeer/WheatBeer.github.io/edit/master/src/content/${editType}/${editSlug}.md`;

  return (
    <div className="mx-auto max-w-3xl px-4 pt-10">
      <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</h3>
      <div className="mt-1 flex items-center gap-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{category}</h2>
        <a
          href={editHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          aria-label="Edit this page on GitHub"
        >
          edit
        </a>
      </div>
      <hr className="mt-4 border-slate-200 dark:border-slate-800" />
    </div>
  );
}
