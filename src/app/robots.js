export default function robots() {
    const baseUrl = `http://${process.env.BASE_URL}`
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}