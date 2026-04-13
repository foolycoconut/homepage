/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        sand: "#f4efe7",
        clay: "#d97757",
        moss: "#40634d",
        sun: "#f7c873"
      },
      fontFamily: {
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"]
      },
      boxShadow: {
        card: "0 20px 60px rgba(17, 24, 39, 0.12)"
      }
    }
  },
  plugins: []
};
