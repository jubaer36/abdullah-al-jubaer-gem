import type { NextConfig } from "next";
import { basePath } from "./site.config";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: `${basePath}/`,
};

export default nextConfig;
