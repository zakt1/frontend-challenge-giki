/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'h1': ['36px', '48px'],
        'h2': ['30px', '40px'],
        'body': ['16px', '24px'],
      },
      fontWeight: {
        'h1': '900',
        'h2': '600',
        'body': '600',
      }, 

    },
  },
  plugins: [],
}
