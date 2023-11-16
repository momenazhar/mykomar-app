/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose",
        serverComponentsExternalPackages: ["mongoose"],
    },
    webpack: (config) => {
        config.experiments = {
            topLevelAwait: true,
            layers: true,
        };

        return config;
    },
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;
