import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portfolio", // 🔁 Remplace par le nom exact de ton repo
  assetPrefix: "/Portfolio",
};

module.exports = nextConfig;
