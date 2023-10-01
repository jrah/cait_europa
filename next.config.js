/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "images.prismic.io",
                port: "",
            },
            {
                protocol: "https",
                hostname: "clef.cdn.prismic.io",
                port: "",
            },
        ],
    },
}

module.exports = nextConfig
