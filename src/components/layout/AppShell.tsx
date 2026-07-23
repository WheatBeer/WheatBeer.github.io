"use client";

import { useEffect, useRef, useState } from "react";
import type { NavGroup } from "@/lib/nav";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ShareButton from "./ShareButton";

export default function AppShell({
  groups,
  children,
}: {
  groups: NavGroup[];
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const el = headerWrapRef.current;
    if (!el) return;
    const updateHeight = () => setHeaderHeight(el.offsetHeight);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const onScroll = () => setShowScrollTop(el.scrollTop > 400);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={headerWrapRef} className="shrink-0">
        <Header mobileOpen={mobileOpen} onToggleMobile={() => setMobileOpen((v) => !v)} />
      </div>
      <div className="flex min-h-0 flex-1">
        <Sidebar
          groups={groups}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
          topOffset={headerHeight}
        />
        <main
          ref={mainRef}
          className="relative min-w-0 flex-1 scroll-smooth overflow-x-hidden overflow-y-auto"
        >
          {children}
          <Footer />
        </main>
      </div>

      <ShareButton />

      {showScrollTop && (
        <button
          type="button"
          onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-opacity hover:bg-indigo-500"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
