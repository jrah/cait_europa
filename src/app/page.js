import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
export default async function Home({ params }) {
  const client = createClient();
  const page = await client.getByUID("home", "home");
  console.log(page.data.slices)
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

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getByUID("home", "home");
  const { meta_description, meta_title } = page.data;
  return {
    title: meta_title,
    meta_description: meta_description
  };
}