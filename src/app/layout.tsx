import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
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
  openGraph: {
    title: "Sungmin Ryu (WheatBeer)",
    description: "WheatBeer's Blog (Sungmin, Ryu)",
    url: "https://WheatBeer.github.io",
    siteName: "Sungmin Ryu (WheatBeer)",
    images: ["/images/profile.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sungmin Ryu (WheatBeer)",
    description: "WheatBeer's Blog (Sungmin, Ryu)",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navGroups = getNavGroups();

  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex h-dvh flex-col overflow-hidden">
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

        <AppShell groups={navGroups}>{children}</AppShell>
      </body>
    </html>
  );
}
