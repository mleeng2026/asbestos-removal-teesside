import { DetailPage, metadataForSlug } from "@/components/DetailPage";

const slug = "asbestos-removal-guisborough-eston";
export const metadata = metadataForSlug(slug);
export default function Page() { return <DetailPage slug={slug} />; }
