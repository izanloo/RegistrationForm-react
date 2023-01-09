/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '70':'70%'
      },
      backgroundColor: {
        'rozeVip': '#d20b2e'
      }
    },
  },
  plugins: [],
}