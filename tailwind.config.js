/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      colors:{
        darkest: '#0e1e25',
        black20:'rgba(0,0,0,0.2)',
        graydark:'#8795a1',
        graydarkest:'#3d4852',
        graydarker:'#606f7b',

    },
    fontFamily: {
    roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
}

