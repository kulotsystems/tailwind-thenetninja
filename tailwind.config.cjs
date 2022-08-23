/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontSize: {
        mammoth: ['8rem', { lineHeight: '1' }],
      },
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883'
        }
      }
    },
  },
  plugins: [],
}
