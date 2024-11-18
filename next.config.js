const { withSentryConfig } = require("@sentry/nextjs");
// next.config.js
const fs = require("fs");
const path = require("path");

const allowedBots =
  ".*(bot|telegram|baidu|bing|yandex|iframely|whatsapp|facebook).*";
const {
  NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
  VERCEL_DEPLOYMENT_ID,
  VERCEL_GIT_COMMIT_SHA
} = process.env;
const COMMIT_SHA =
  NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || VERCEL_GIT_COMMIT_SHA || "local";
const DEPLOYMENT_ID = VERCEL_DEPLOYMENT_ID || "unknown";

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers() {
    return [
      {
        headers: [
          { key: "Referrer-Policy", value: "strict-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Lcm-Version", value: COMMIT_SHA },
          { key: "X-Lcm-Deployment", value: DEPLOYMENT_ID }
        ],
        source: "/(.*)"
      }
    ];
  },
  poweredByHeader: false,
  reactStrictMode: false,
  redirects() {
    return [
      {
        destination: "/?signup=true",
        permanent: false,
        source: "/signup"
      },

      // Redirect: lcm.xyz/u/lens/<localname> > lcm.xyz/u/<localname>
      {
        destination: "/u/:handle",
        permanent: true,
        source: "/u/:namespace/:handle"
      }
    ];
  },
  rewrites() {
    return [
      {
        destination: "https://og.lcm.xyz/u/:match*",
        has: [{ key: "user-agent", type: "header", value: allowedBots }],
        source: "/u/:match*"
      },
      {
        destination: "https://og.lcm.xyz/posts/:match*",
        has: [{ key: "user-agent", type: "header", value: allowedBots }],
        source: "/posts/:match*"
      }
    ];
  },
  transpilePackages: ["data"],
  typescript: {
    ignoreBuildErrors: true
  },
  // output: "export",  // 生成静态站点
  productionBrowserSourceMaps: false, // 禁用生成 source map 文件
  productionSourceMaps: false,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // 移除 .map 文件
      config.devtool = false;
      // 在生成后清理 .map 文件
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap(
            "RemoveSourceMapPlugin",
            (compilation) => {
              const outputDir = compilation.options.output.path;
              fs.readdirSync(outputDir).forEach((file) => {
                if (file.endsWith(".map")) {
                  fs.unlinkSync(path.join(outputDir, file));
                }
              });
            }
          );
        }
      });
    }
    return config;
  }
};

module.exports = withSentryConfig(nextConfig);
