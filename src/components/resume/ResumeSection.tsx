import type { ResumeSection } from "@/content/resume";

export default function ResumeSectionBlock({ section }: { section: ResumeSection }) {
  return (
    <section id={section.id} className="border-t border-slate-200 py-8 first:border-t-0 dark:border-slate-800">
      <h2 className="mb-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
        {section.heading}
      </h2>
      <ul className="flex flex-col gap-6">
        {section.items.map((item, idx) => (
          <li key={idx}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p
                className="font-semibold text-slate-800 dark:text-slate-100 [&_a]:text-indigo-600 [&_a]:underline [&_a]:underline-offset-2 dark:[&_a]:text-indigo-400"
                dangerouslySetInnerHTML={{ __html: item.titleHtml }}
              />
              {item.dateRange && (
                <span className="text-sm whitespace-nowrap text-slate-500 italic dark:text-slate-400">
                  {item.dateRange}
                </span>
              )}
            </div>
            {item.subItemsHtml && item.subItemsHtml.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 [&_a]:text-indigo-600 [&_a]:underline [&_a]:underline-offset-2 dark:text-slate-400 dark:[&_a]:text-indigo-400">
                {item.subItemsHtml.map((sub, subIdx) => (
                  <li key={subIdx} dangerouslySetInnerHTML={{ __html: sub }} />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
