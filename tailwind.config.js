/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      },
      colors: {
        'primary': '',
        'secondary': '#0F0D32',
        'nav-hover': 'rgb(220, 53, 69)',
        'font-color': 'rgb(140, 148, 184)',
        'footer-hover':'#d5d5d5'
      }
    },
  },
  plugins: [require("daisyui")],
}

