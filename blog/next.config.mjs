/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/ostrich-egg/blogmarkdown/main/images/**'
            },
        ],
    },
};

export default nextConfig;
