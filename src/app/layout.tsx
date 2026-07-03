import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import { getNavGroups } from "@/lib/nav";

const GA_MEASUREMENT_ID = "G-0MZF9H5B13";

export const metadata: Metadata = {
  metadataBase: new URL("https://WheatBeer.github.io"),
  title: {
    default: "WheatBeer",
    template: "%s | WheatBeer",
  },
  description: "WheatBeer's Blog (Sungmin, Ryu)",
  authors: [{ name: "Sungmin, Ryu" }],
  verification: {
    google: "LQ8d5rlrBrPQBCFAX8aJR1AgnkzxhfibXfKFzrnDIQA",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navGroups = getNavGroups();

  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex h-screen flex-col overflow-hidden">
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Header />
        <div className="flex min-h-0 flex-1">
          <Sidebar groups={navGroups} />
          <main className="min-w-0 flex-1 overflow-y-auto">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
