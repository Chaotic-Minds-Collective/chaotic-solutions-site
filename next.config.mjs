/**
 * Static export: builds the site to plain HTML/CSS/JS in `out/` so it can be
 * served by Cloudflare Pages (commercial use allowed, no cold starts).
 * images.unoptimized is required because the default Next.js image
 * optimizer needs a server, which a static export does not have.
 * The site currently uses plain <img> tags, so this has no visual effect.
 */
const config = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default config;
