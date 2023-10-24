import { createClient } from "@/prismicio";

export default async function sitemap() {
    const baseUrl = `http://${process.env.BASE_URL}`
    const client = createClient();
    const getAllPageDocuments = await client.getAllByType("page");
    const getAllBlogDocuments = await client.getAllByType("blog");
    const pages = getAllPageDocuments.map(({ url, last_publication_date }) => ({
        url: `${baseUrl}${url}`,
        lastModified: last_publication_date
    }))

    const blogs = getAllBlogDocuments.map(({ url, last_publication_date }) => ({
        url: `${baseUrl}${url}`,
        lastModified: last_publication_date
    }))

    const routes = [""].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pages, ...blogs]
}