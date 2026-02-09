import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ccdbdc",
          light: "#e5eff0",
          dark: "#a8c5c7",
        },
        secondary: {
          DEFAULT: "#80ced7",
          light: "#a8dfe5",
          dark: "#5eb5bf",
        },
        accent: {
          DEFAULT: "#63c7b2",
          light: "#8dd9c7",
          dark: "#4aa996",
        },
        accent2: {
          DEFAULT: "#8e6c88",
          light: "#a88aa3",
          dark: "#6f5469",
        },
        dark: {
          DEFAULT: "#263d42",
          light: "#3a5a61",
          dark: "#1a2a2e",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
