module.exports = {
  content: ['./pages/**/*.{tsx,jsx,js}', './components/**/*.{tsx,jsx,js}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        black: {
          100: '#5C5C5C',
          200: '#525252',
          300: '#474747',
          400: '#3d3d3d',
          500: '#333333',
          600: '#292929',
          700: '#1f1f1f',
          800: '#141414',
          900: '#0a0a0a',
        },
      },
      spacing: {
        'header-sm': '60px',
        'header-md': '120px',
      },

      keyframes: {
        'hue-rotate': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('children', '& *')
    },
  ],
}
