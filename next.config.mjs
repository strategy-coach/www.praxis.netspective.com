import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  // ⬇⬇ THIS is required for GitHub Pages
  output: 'export',

  // helpful but optional:
  // images: { unoptimized: true },
  // trailingSlash: true,
};

export default withMDX(config);

