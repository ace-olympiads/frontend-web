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
  webpack: (config, { isServer }) => {
    // Add a rule to handle MP4 files using the file-loader
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/media/", // Specify the output directory for the media files
            publicPath: "/_next/static/media/", // Specify the public path for the media files
          },
        },
      ],
    });

    // You may also need to configure the assetPrefix for client-side navigation
    if (!isServer) {
      config.output.publicPath = "_next/";
    }

    return config;
  },
};

module.exports = nextConfig;
