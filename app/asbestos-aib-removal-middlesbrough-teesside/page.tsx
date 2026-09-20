import { DetailPage, metadataForSlug } from "@/components/DetailPage";

const slug = "asbestos-aib-removal-middlesbrough-teesside";
export const metadata = metadataForSlug(slug);
export default function Page() { return <DetailPage slug={slug} />; }
