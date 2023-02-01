/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Gilroy', 'sans-serif'],
      header: ['Bebas Neue Cyrillic', 'sans-serif']
    },
    extend: {
      colors: {
        brand: '#e61f26'
      },
    },
  },
  plugins: [],
}
