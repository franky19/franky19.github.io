/** @format */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Hindari error terkait gambar
  },
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/franky19.github.io/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/franky19.github.io" : "",
};

module.exports = nextConfig;
