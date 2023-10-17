import Page, { SSGPageTypeGeneration } from "@/components/Page";
export default async function Blog({ params }) {
    return <Page type="page" uid={params.uid} />
}

export async function generateStaticParams() {
    return SSGPageTypeGeneration("page")
}