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
        primary: "#1A601A",
        accent: "#7ED321",
        text: "#2C3E2C",
        background: "#FFFFFF",
        borderLight: "#C0C0C0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-cairo)", "sans-serif"],
        heading: ["var(--font-alexandria)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
