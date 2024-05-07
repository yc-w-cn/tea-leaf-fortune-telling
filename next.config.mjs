const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProduction ? "export" : "standalone",
};

export default nextConfig;
