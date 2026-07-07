"use client";

import { useState } from "react";
import type { NavGroup } from "@/lib/nav";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AppShell({
  groups,
  children,
}: {
  groups: NavGroup[];
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Header mobileOpen={mobileOpen} onToggleMobile={() => setMobileOpen((v) => !v)} />
      <div className="flex min-h-0 flex-1">
        <Sidebar groups={groups} mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />
        <main className="min-w-0 flex-1 overflow-y-auto">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
