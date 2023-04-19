/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sidenavbar: '#131313',
        texthover: '#d4d4fc',
        grey: '#f8f8f8',
        greyLight: '#c6c7c9',
        green: '#ddf6de',
        greenText:'#749977'
      },
      fontFamily: {
        'sans': ['Sulphur Point', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}