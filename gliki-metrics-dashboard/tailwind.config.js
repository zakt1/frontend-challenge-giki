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
        'body': ['14px', '21px'],
        'body2':['16px', '24px']
      },
      fontWeight: {
        'h1': '900',
        'h2': '600',
        'body': '400',
        'body2': '500'
      }, 
      colors: {
        primary: '#5f2b68',
        secondary: '#c44170',
        contrast: '#ffffff',
        background: '#EBD7ED'
      }

    },
  },
  plugins: [],
}

