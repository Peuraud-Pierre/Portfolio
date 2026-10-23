import type { NextConfig } from "next";

// `npm run deploy` construit une version statique pour GitHub Pages, servie sous
// https://peuraud-pierre.github.io/Portfolio/ : toutes les URLs doivent donc commencer par /Portfolio.
// Les autres builds (dev, Vercel) restent à la racine.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Portfolio" : "";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  ...(isGithubPages && { output: "export", basePath }),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
