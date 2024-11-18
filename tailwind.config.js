const screens = {
  ms: "320px", // Mobile Small
  mm: "375px", // Mobile Medium
  ml: "425px", // Mobile Large
  sm: "768px", // Tablet
  md: "1024px", // Desktop
  lg: "1440px", // Large Desktop
}

const safelist = [""]
for (const [key] of Object.entries(screens)) {
  safelist.push(`${key}:block`)
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  safelist: safelist,
  theme: {
    screens: screens,
    maxWidth: screens,
    extend: {
      colors: {
        black: {
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

      keyframes: {
        "hue-rotate": {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}
