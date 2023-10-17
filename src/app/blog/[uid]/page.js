import Page, { SSGPageTypeGeneration } from "@/components/Page";
export default async function Blog({ params }) {
    return <Page type="blog" uid={params.uid} />
}

export async function generateStaticParams() {
    return SSGPageTypeGeneration("blog")
}