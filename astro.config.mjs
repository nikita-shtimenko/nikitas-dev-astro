import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercelEdge from "@astrojs/vercel/edge"; // TESTING RN
// import vercel from "@astrojs/vercel/serverless"; DOEST WORK
// import vercelStatic from "@astrojs/vercel/static"; ?

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercelEdge(),
});
