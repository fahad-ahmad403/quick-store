import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  plugins: ["@tailwindcss/postcss"],
     resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
  },
},
};

export default nextConfig;
