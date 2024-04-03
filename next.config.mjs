/** @type {import('next').NextConfig} */
const nextConfig = {
    images:          {
        remotePatterns: [
            {hostname: 'localhost'},
            {hostname: 'images.ctfassets.net'},
        ],
    },
};

export default nextConfig;
