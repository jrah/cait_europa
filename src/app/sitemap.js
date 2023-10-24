import { createClient } from "@prismicio/client"

export default async function sitemap() {
    const url = `http://${process.env.BASE_URL}`
    const client = createClient();
    const getAllPages = await client.getAllByType("pages");
    const pages = getAllPages.map(({ id, date }) => ({
        url: `${url}/${id}`,
        lastModified: date.toUTCString
    }))

    const routes = [""].map((route) => ({
        url: `${url}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pages]
}