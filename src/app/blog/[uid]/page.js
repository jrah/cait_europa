import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
export default async function Blog({ params }) {
    const client = createClient()
    const page = await client.getByUID('blog', params.uid);
    return (
        <main>
            <SliceZone
                slices={page.data.slices}
                components={components}
                context={page.data.slices}
            />
        </main>
    )
}

export async function generateStaticParams() {
    const client = createClient()
    const pages = await client.getAllByType('blog')
    return pages.map((page) => {
        return {
            category: 'blog',
            uid: page.uid,
        }
    })
}