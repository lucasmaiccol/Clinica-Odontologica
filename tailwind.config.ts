import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: {
          DEFAULT: "#FAF9F6",
          dim: "#F1EFE9",
        },
        pine: {
          50: "#EAF1EE",
          100: "#CFE0D9",
          300: "#7FA69B",
          500: "#2F5C54",
          700: "#1B4139",
          900: "#0F2620",
        },
        denim: {
          400: "#7C9BC0",
          500: "#4F7CAC",
          600: "#3C628B",
        },
        sand: {
          100: "#EFE7D8",
          300: "#DDCBA3",
        },
        ink: "#262622",
        line: "#DEDAD0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        arch: "999px 999px 24px 24px",
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(15, 38, 32, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
