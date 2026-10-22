"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ShareButton from "./ShareButton";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const onScroll = () => setShowScrollTop(el.scrollTop > 400);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />
      <main
        ref={mainRef}
        className="relative min-h-0 flex-1 scroll-smooth overflow-x-hidden overflow-y-auto"
      >
        {children}
        <Footer />
      </main>

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
