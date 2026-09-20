import { DetailPage, metadataForSlug } from "@/components/DetailPage";

const slug = "asbestos-removal-darlington-county-durham";
export const metadata = metadataForSlug(slug);
export default function Page() { return <DetailPage slug={slug} />; }
