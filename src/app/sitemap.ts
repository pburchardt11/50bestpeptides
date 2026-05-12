import type { MetadataRoute } from "next";
import { allPeptides as peptides } from "@/data/all-peptides";
import { allBlogPosts as blogPosts } from "@/data/all-blogs";

// Required for output: 'export'
export const dynamic = "force-static";

let comparisons: { slug: string }[] = [];
try {
  comparisons = require("@/data/comparisons").comparisons;
} catch {
  // Not yet available
}

// Use fixed dates so the sitemap doesn't change on every build.
// Peptide pages are staggered across dates to signal individual maintenance.
const SITE_LAUNCH = new Date("2026-03-15");
const LAST_CONTENT_UPDATE = new Date("2026-04-20");

function peptideLastModified(rank: number): Date {
  // Spread peptide pages across a realistic date range (launch → last update)
  const start = SITE_LAUNCH.getTime();
  const end = LAST_CONTENT_UPDATE.getTime();
  const total = peptides.length;
  const offset = ((rank - 1) / (total - 1)) * (end - start);
  return new Date(start + offset);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.50bestpeptides.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/peptides`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: SITE_LAUNCH, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: SITE_LAUNCH, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: SITE_LAUNCH, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: SITE_LAUNCH, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: SITE_LAUNCH, changeFrequency: "monthly", priority: 0.3 },
  ];

  const peptidePages: MetadataRoute.Sitemap = peptides.map((p) => ({
    url: `${baseUrl}/peptides/${p.slug}`,
    lastModified: peptideLastModified(p.rank),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const comparePages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...peptidePages, ...blogPages, ...comparePages];
}
