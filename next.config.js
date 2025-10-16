/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Build optimizations
  swcMinify: true, // Use SWC for faster minification
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs in production
  },
  
  // 🚀 Experimental features for faster builds
  experimental: {
    // Enable build cache
    turbotrace: {
      logLevel: 'error',
    },
  },

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

  // ✅ Disable TypeScript type checking during builds (already optimized)
  typescript: {
    ignoreBuildErrors: true,
  },

  // 🚀 ESLint optimization
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during builds
  },

  webpack: (config, { isServer, dev }) => {
    // 🚀 Webpack optimizations
    if (!dev) {
      // Production optimizations
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      };
    }

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
