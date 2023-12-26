/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src*.vue',
    './src/components*.vue',
    './src/views*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'ring-dark': '#141414',
        'ring-dark-green': '#142828',
        'ring-pale-green': '#286450',
        'ring-green': '#506450',
        'ring-golden': '#b48c50',
        'ring-light': '#c8b4b4'
      },
      fontFamily: {
        'cinzel': '"Cinzel"'
      }
    },
  },
  plugins: [],
}

