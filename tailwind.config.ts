import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryColor: "#6206B7",
        secondaryColor: "#A766E3",
        tertiaryColor: "#9E00FF",
        primaryTextColor: "#4f4f4f",
        secondaryTextColor: "#6b7280",
        black: "#333333",
        grey: "#949494",
        white: "#fff",
        light: "#f8f4f4",
        textColor: "#ffffff",
        backgroundColor: "#FBF7FF",
        transparent: "transparent",
        success: "#41C300",
        danger: "#ff3333",
        error: "#ff3333",
        pending: "#45B6FE",
        rankingBackdrop: "#8B8B8B",
        medium: "#6e6969",
        inputBoxBacgroundColor: "#ffffff",
        inputBoxTextColor: "#444",
        productionButton: "#3AB4F2",
      },
    },
  },
  plugins: [],
};
export default config;
