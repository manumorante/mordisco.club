import type { Config } from "tailwindcss"

const screens = {
  ms: "320px", // Mobile Small
  mm: "375px", // Mobile Medium
  sm: "480px",
  md: "768px",
  lg: "976px",
  xl: "1440px",
}

export default {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    screens: screens,
    maxWidth: screens,
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#000000",
          100: "#5C5C5C",
          200: "#525252",
          300: "#474747",
          400: "#3d3d3d",
          500: "#333333",
          600: "#292929",
          700: "#1f1f1f",
          800: "#141414",
          900: "#0a0a0a",
        },
      },
      spacing: {
        "header-sm": "60px",
        "header-md": "120px",
      },
    },
  },
  plugins: [],
} satisfies Config
