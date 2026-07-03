"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavGroup } from "@/lib/nav";

function CategoryBlock({
  name,
  items,
  currentSlug,
}: {
  name: string;
  items: { slug: string; title: string; href: string }[];
  currentSlug: string;
}) {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-1.5 px-2 py-1.5 text-left text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <span className={`inline-block transition-transform ${open ? "rotate-90" : ""}`}>▸</span>
        {name}
      </button>
      {open && (
        <ul className="ml-4 flex flex-col gap-0.5 border-l border-slate-200 pl-3 dark:border-slate-800">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={item.href}
                className={`block rounded px-2 py-1 text-sm ${
                  item.slug === currentSlug
                    ? "bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Sidebar({ groups }: { groups: NavGroup[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const currentSlug = pathname.replace(/^\/|\/$/g, "");

  const content = (
    <nav className="flex h-full flex-col gap-4 overflow-y-auto p-4">
      <Link
        href="/"
        className={`rounded px-2 py-1 text-sm font-semibold ${
          pathname === "/"
            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        }`}
      >
        Home
      </Link>

      {groups.map((group) =>
        group.categories.length === 0 ? null : (
          <div key={group.type} className="flex flex-col gap-1">
            <h2 className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              {group.label}
            </h2>
            {group.categories.map((category) => (
              <CategoryBlock
                key={category.name}
                name={category.name}
                items={category.items}
                currentSlug={currentSlug}
              />
            ))}
          </div>
        ),
      )}
    </nav>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        className="fixed top-3 left-3 z-40 rounded-md border border-slate-200 bg-white p-2 shadow-sm md:hidden dark:border-slate-700 dark:bg-slate-900"
        aria-label="Toggle navigation"
      >
        <span className="block h-0.5 w-5 bg-slate-700 dark:bg-slate-300" />
        <span className="mt-1 block h-0.5 w-5 bg-slate-700 dark:bg-slate-300" />
        <span className="mt-1 block h-0.5 w-5 bg-slate-700 dark:bg-slate-300" />
      </button>

      <aside className="hidden w-64 shrink-0 border-r border-slate-200 md:block dark:border-slate-800">
        {content}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <aside className="absolute top-0 left-0 h-full w-64 bg-white shadow-xl dark:bg-slate-900">
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
