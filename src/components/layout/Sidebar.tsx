"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavGroup } from "@/lib/nav";

function CategoryBlock({
  name,
  items,
  currentSlug,
  onNavigate,
}: {
  name: string;
  items: { slug: string; title: string; href: string }[];
  currentSlug: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState<boolean>(true);

  if (items.length === 0) {
    return (
      <div className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium text-slate-400 dark:text-slate-600">
        {name}
      </div>
    );
  }

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
                onClick={onNavigate}
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

interface SidebarProps {
  groups: NavGroup[];
  mobileOpen: boolean;
  onCloseMobile: () => void;
  topOffset: number;
}

export default function Sidebar({ groups, mobileOpen, onCloseMobile, topOffset }: SidebarProps) {
  const pathname = usePathname();
  const currentSlug = pathname.replace(/^\/|\/$/g, "");

  const navList = (
    <>
      <Link
        href="/"
        onClick={onCloseMobile}
        className={`rounded px-2 py-1 text-sm font-semibold ${
          pathname === "/"
            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        }`}
      >
        Home
      </Link>

      {groups.map((group) => (
        <div key={group.name} className="flex flex-col gap-1">
          <h2 className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            {group.name}
          </h2>
          {group.categories.map((category) => (
            <CategoryBlock
              key={category.name}
              name={category.name}
              items={category.items}
              currentSlug={currentSlug}
              onNavigate={onCloseMobile}
            />
          ))}
        </div>
      ))}
    </>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 overflow-y-auto border-r border-slate-200 md:block dark:border-slate-800">
        <nav className="flex flex-col gap-4 p-4">{navList}</nav>
      </aside>

      {mobileOpen && (
        <>
          <div
            style={{ top: topOffset }}
            className="fixed right-0 bottom-0 left-0 z-30 touch-none overscroll-contain bg-black/30 md:hidden"
            onClick={onCloseMobile}
            aria-hidden
          />
          <aside
            style={{ top: topOffset }}
            className="fixed bottom-0 left-0 z-40 w-56 overflow-y-auto overscroll-contain bg-white shadow-xl md:hidden dark:bg-slate-900"
          >
            <nav className="flex flex-col gap-4 p-4">{navList}</nav>
          </aside>
        </>
      )}
    </>
  );
}
