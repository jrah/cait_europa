import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
export default async function Home({ params }) {
  const client = createClient();
  console.log(client)
  const page = await client.getByUID("home", "home");
  console.log(page)
  console.log(components)
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