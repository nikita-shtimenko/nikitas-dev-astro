import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
// import vercelStatic from "@astrojs/vercel/static"; // MOBILE NAVBAR WORKS, PATHNAME DOES NOT WORK

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
});
