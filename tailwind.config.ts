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
          50: "#f0f7ff",
          100: "#dcecff",
          200: "#b8d9ff",
          300: "#8abdff",
          400: "#5b9dff",
          500: "#3178f6",
          600: "#215bdc",
          700: "#1c47b0",
          800: "#1c3c8c",
          900: "#1b3470",
        },
        accent: {
          50: "#f2fbf9",
          100: "#d6f5ee",
          200: "#aeeadd",
          300: "#78d9c8",
          400: "#43bfab",
          500: "#279e8d",
          600: "#1c7f73",
          700: "#1a655e",
          800: "#19514c",
          900: "#184440",
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
