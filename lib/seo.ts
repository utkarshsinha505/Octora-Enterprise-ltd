import type { Metadata } from "next";
import { site } from "@/data/site";

type PageSeo = {
  title?: string;
  description?: string;
  path: string;
  image?: string;
};

/** Per-page metadata with canonical URL and Open Graph / Twitter tags. */
export function pageMetadata({ title, description = site.description, path, image }: PageSeo): Metadata {
  const fullTitle = title ? `${title} | ${site.shortName}` : `${site.shortName}: ${site.tagline}`;
  // A page-level openGraph object replaces the inherited one, so always set the image explicitly.
  // Default: the generated app/opengraph-image.tsx
  const images = [
    image ? { url: image } : { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` },
  ];
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}
