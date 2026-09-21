import type { MetadataRoute } from "next";
import { areas, services, site } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-17T00:00:00Z");
  return [
    {
      url: site.url,
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${site.url}/asbestos-removal-middlesbrough-teesside-commercial-roof.webp`],
    },
    {
      url: `${site.url}/services`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/areas`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...services.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [`${site.url}${page.image?.src ?? "/asbestos-removal-middlesbrough-teesside-commercial-roof.webp"}`],
    })),
    ...areas.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified: updated,
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
