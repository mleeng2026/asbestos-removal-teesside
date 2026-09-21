import type { MetadataRoute } from "next";
import { areas, services, site } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-17T00:00:00Z");
  const contentUpdated = new Date("2026-09-21T00:00:00Z");
  return [
    {
      url: site.url,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${site.url}/asbestos-removal-middlesbrough-teesside-middlesbrough-town-centre-ts1-5ad.webp`],
    },
    {
      url: `${site.url}/services`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${site.url}/asbestos-removal-services-middlesbrough-teesside-town-centre-ts1-5ad.webp`],
    },
    {
      url: `${site.url}/areas`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${site.url}/asbestos-removal-areas-teesside-middlesbrough-town-centre-ts1-5ad.webp`],
    },
    ...services.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified: contentUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [`${site.url}${page.image.src}`],
    })),
    ...areas.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified: contentUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${site.url}${page.primaryImage.src}`],
    })),
    {
      url: `${site.url}/privacy`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
