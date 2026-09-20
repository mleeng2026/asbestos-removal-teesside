import { DetailPage, metadataForSlug } from "@/components/DetailPage";

const slug = "asbestos-removal-hartlepool";
export const metadata = metadataForSlug(slug);
export default function Page() { return <DetailPage slug={slug} />; }
