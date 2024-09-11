/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeOranage: '#D67F31'
      },
      fontFamily: {
        themeFont: ['serif','Georgia'], // Add your custom font here
      },
    },
  },
  plugins: [],
}

