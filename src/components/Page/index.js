import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({ type, uid }) {
    const client = createClient();
    const page = await client.getByUID(type, uid);
    const { data } = page
    return (
        <main>
            <SliceZone
                slices={data.slices}
                components={components}
                context={data.slices}
            />
        </main>
    );
}


export async function SSGPageTypeGeneration(type) {
    const client = createClient()
    const pages = await client.getAllByType(type)
    return pages.map((page) => {
        return {
            category: type,
            uid: page.uid,
        }
    })
}

export async function MetaData(type, uid) {
    const client = createClient();
    const page = await client.getByUID(type, uid);
    const { meta_description, meta_title } = page.data;
    return {
        title: meta_title,
        meta_description: meta_description
    };
}