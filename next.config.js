/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "*",
        }, ],
    },
    reactStrictMode: true,
    webpack(config, options) {
        config.module.rules.push({
            loader: "@svgr/webpack",
            issuer: /\.[jt]sx?$/,
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plugins: [{
                        name: "preset-default",
                        params: {
                            override: {
                                removeViewBox: false,
                            },
                        },
                    }, ],
                },
                titleProps: true,
            },
            test: /\.svg$/,
        });

        return config;
    },
};