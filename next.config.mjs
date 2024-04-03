/** @type {import('next').NextConfig} */
const nextConfig = {
    images:          {
        remotePatterns: [
            {hostname: 'localhost'},
            {hostname: 'images.ctfassets.net'},
        ],
    },
    // i18n: {
    //     locales: ['fr', 'en-US'],
    //     defaultLocale: 'fr',
    // },
    // redirects() {
    //     return [
    //         // Redirect '/' to '/fr'
    //         {
    //             source: '/',
    //             destination: '/fr',
    //             permanent: true,
    //         },
    //         // Ensure '/fr' does not redirect to '/'
    //         // This is already handled by the default locale configuration
    //         // '/en' stays in '/en'
    //         // This is also handled by the default locale configuration
    //     ];
    // },
};

export default nextConfig;
