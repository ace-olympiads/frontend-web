/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "img.youtube.com",
      "platform-lookaside.fbsbx.com",
      "w7.pngwing.com",
      "t4.ftcdn.net",
      "lh3.google.com",
    ],
  },
  
  // ✅ Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

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
