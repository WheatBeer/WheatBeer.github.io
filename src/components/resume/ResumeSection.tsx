import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import type { ResumeSection } from "@/content/resume";

const contactIcons = {
  email: FaEnvelope,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export default function ResumeSectionBlock({ section }: { section: ResumeSection }) {
  if (section.id === "contact") {
    return (
      <section id={section.id} className="border-t border-slate-200 py-8 first:border-t-0 dark:border-slate-800">
        <h2 className="mb-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
          {section.heading}
        </h2>
        <ul className="flex flex-col gap-3">
          {section.items.map((item, idx) => {
            const Icon = item.icon ? contactIcons[item.icon] : null;
            return (
              <li key={idx}>
                <a
                  href={item.href}
                  target={item.href?.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                >
                  {Icon && <Icon size={18} />}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  return (
    <section id={section.id} className="border-t border-slate-200 py-8 first:border-t-0 dark:border-slate-800">
      <h2 className="mb-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
        {section.heading}
      </h2>
      <ul className={`flex flex-col ${section.id === "interests" ? "gap-2" : "gap-6"}`}>
        {section.items.map((item, idx) => (
          <li
            key={idx}
            className={
              item.separatorBefore
                ? "mt-6 mb-2 border-t border-slate-200 pt-8 dark:border-slate-800"
                : undefined
            }
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 [&_a]:text-indigo-600 [&_a]:underline [&_a]:underline-offset-2 dark:[&_a]:text-indigo-400"
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
