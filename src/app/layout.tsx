import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleTranslate } from "@/components/google-translate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "50 Best Peptides | Comprehensive Peptide Research Rankings & Guide",
    template: "%s | 50 Best Peptides",
  },
  description:
    "Explore the top 50 peptides ranked by popularity. Comprehensive research information on BPC-157, Semaglutide, TB-500, and more. Educational resource by 50 Best Limited.",
  keywords: [
    "peptides",
    "peptide research",
    "BPC-157",
    "semaglutide",
    "tirzepatide",
    "TB-500",
    "peptide rankings",
    "peptide guide",
  ],
  authors: [{ name: "50 Best Limited" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "50 Best Peptides",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* RSS autodiscovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="50 Best Peptides Blog"
          href="/blog/feed.xml"
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2057309335537732"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleTranslate />
      </body>
    </html>
  );
}
