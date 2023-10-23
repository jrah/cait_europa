import Page, { SSGPageTypeGeneration, MetaData } from "@/components/Page";

export default async function Blog({ params }) {
    return <Page type="blog" uid={params.uid} />
}

export async function generateStaticParams() {
    return SSGPageTypeGeneration("blog")
}

export async function generateMetadata({ params }) {
    return MetaData("blog", params.uid)
}