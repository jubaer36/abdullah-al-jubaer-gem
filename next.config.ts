import type { NextConfig } from "next";
import { basePath } from "./site.config";

// basePath is "" in dev and "/<repo>" in the production build (see site.config.ts).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
};

export default nextConfig;
