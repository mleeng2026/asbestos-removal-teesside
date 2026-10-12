import type { MetadataRoute } from "next";
import { areas, services, site } from "@/lib/site-data";

export const dynamic = "force-static";

// The exported GitHub Pages site uses trailingSlash: true.
// Keep sitemap URLs identical to their canonical published paths.
const baseUrl = site.url.replace(/\/$/, "");
const pageUrl = (path = "") => path ? `${baseUrl}/${path.replace(/^\/+|\/+$/g, "")}/` : `${baseUrl}/`;
const imageUrl = (path: string) => `${baseUrl}/${path.replace(/^\/+/, "")}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-21T00:00:00Z");

  return [
    {
      url: pageUrl(),
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 1,
      images: [imageUrl("asbestos-removal-middlesbrough-teesside-teesamp-ts2.webp")],
    },
    {
      url: pageUrl("services"),
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [imageUrl("asbestos-removal-services-middlesbrough-teesside-riverside-park-ts2.webp")],
    },
    {
      url: pageUrl("areas"),
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [imageUrl("asbestos-removal-areas-middlesbrough-teesside-teesamp-ts2.webp")],
    },
    ...services.map((page) => ({
      url: pageUrl(page.slug),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [imageUrl(page.image.src)],
    })),
    ...areas.map((page) => ({
      url: pageUrl(page.slug),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [imageUrl(page.primaryImage.src)],
    })),
    {
      url: pageUrl("privacy"),
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
