const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        pixel: [
          "Pixelify Sans Variable",
          "Pixel",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
