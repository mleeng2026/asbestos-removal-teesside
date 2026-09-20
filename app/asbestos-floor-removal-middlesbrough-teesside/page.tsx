import { DetailPage, metadataForSlug } from "@/components/DetailPage";

const slug = "asbestos-floor-removal-middlesbrough-teesside";
export const metadata = metadataForSlug(slug);
export default function Page() { return <DetailPage slug={slug} />; }
