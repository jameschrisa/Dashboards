module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1e293b',
          200: '#334155',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
