/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
      },
      {
        protocol: 'https',
        hostname: 'w7.pngwing.com',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'lh3.google.com',
      },
    ],
  },

  // Add empty turbopack config to silence the warning
  turbopack: {},

  // ✅ Disable TypeScript type checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config, { isServer }) => {
    // Add a rule to handle MP4 files using the file-loader
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/media/",
            publicPath: "/_next/static/media/",
          },
        },
      ],
    });

    if (!isServer) {
      config.output.publicPath = "_next/";
    }

    return config;
  },
};

module.exports = nextConfig;
