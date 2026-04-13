import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProjectPages =
  Boolean(owner) && Boolean(repo) && repo !== `${owner}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : "https://example.com",
  base: isProjectPages ? `/${repo}` : "/",
  integrations: [mdx(), tailwind()],
});
