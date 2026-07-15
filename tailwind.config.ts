import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2fb",
          100: "#dbe4f7",
          200: "#b7c9ef",
          300: "#8aa6e2",
          400: "#5c80d2",
          500: "#3760bf",
          600: "#2749a0",
          700: "#1e3a80",
          800: "#17305f",
          900: "#112448",
        },
        accent: {
          50: "#eefbfc",
          100: "#d3f3f6",
          200: "#a7e6ed",
          300: "#70d1dc",
          400: "#3bb3c2",
          500: "#1c93a4",
          600: "#177686",
          700: "#155f6c",
          800: "#144d58",
          900: "#134049",
        },
        cta: {
          50: "#fff8ec",
          100: "#ffecc9",
          200: "#ffd68e",
          300: "#ffbb52",
          400: "#ffa227",
          500: "#f7931e",
          600: "#db7412",
          700: "#b25a10",
          800: "#8f4713",
          900: "#753c13",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b0b8c8",
          400: "#8590a8",
          500: "#66708a",
          600: "#525a72",
          700: "#43495c",
          800: "#2e323f",
          900: "#1a1c24",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.08)",
        floating: "0 8px 24px rgba(16, 24, 40, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
