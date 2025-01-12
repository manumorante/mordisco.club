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
      },
      spacing: {
        "header-sm": "60px",
        "header-md": "120px",
      },
    },
  },
  plugins: [],
} satisfies Config
