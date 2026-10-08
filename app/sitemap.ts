import type { MetadataRoute } from "next";
import { site, work } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/work", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/about/leadership", priority: 0.6 },
    { path: "/about/values", priority: 0.6 },
    ...(site.features.contact ? [{ path: "/contact", priority: 0.8 }] : []),
  ];
  return [
    ...pages.map((p) => ({ url: absoluteUrl(p.path), lastModified: now, changeFrequency: "monthly" as const, priority: p.priority })),
    ...work.map((w) => ({ url: absoluteUrl(`/work/${w.slug}`), lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
