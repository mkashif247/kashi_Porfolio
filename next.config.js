/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.restat.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'app.megatourn.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'registry.npmmirror.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig; 