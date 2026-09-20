import type { Metadata } from "next";
import { DetailPage, metadataForSlug } from "@/components/DetailPage";
import { allPages } from "@/lib/site-data";

export function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return metadataForSlug(slug);
}

export default async function DynamicDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DetailPage slug={slug} />;
}
