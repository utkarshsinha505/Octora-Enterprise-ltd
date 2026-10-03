import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { preferencesScript } from "@/components/layout/ThemeToggle";
import { revealScript } from "@/components/ui/Reveal";
import "./globals.css";

// Both fonts include the "É" glyph (U+00C9) in their latin subset.
const display = Unbounded({ subsets: ["latin"], variable: "--font-unbounded", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.shortName}: ${site.tagline}`, template: `%s | ${site.shortName}` },
  description: site.description,
  applicationName: site.name,
  keywords: ["AI creative studio", "AI reels", "AI songs", "AI ad films", "AI storytelling", "website design", "synthetic media", site.city],
  openGraph: { type: "website", siteName: site.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07070c",
  colorScheme: "dark light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  slogan: site.tagline,
  url: site.url,
  logo: `${site.url}/brand/upe-logo.png`,
  email: site.contact.email,
  telephone: site.contact.phone,
  address: { "@type": "PostalAddress", streetAddress: site.contact.address, addressLocality: site.city, addressCountry: site.country },
  sameAs: site.social.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferencesScript }} />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
