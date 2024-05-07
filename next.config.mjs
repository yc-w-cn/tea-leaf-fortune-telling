const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProduction ? "export" : "standalone",
  basePath: isProduction ? "/tea-leaf-fortune-telling" : undefined,
  assetPrefix: isProduction ? "/tea-leaf-fortune-telling" : undefined,
};

export default nextConfig;
