const plugin = require('tailwindcss/plugin');
const navbarPlugin = require('./src/plugins/navbar-plugin');

module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        //====== x axis
        sm: '2.063rem',
        lg: '8.563rem',
        dropdown: '1.250rem',
      },
      gap: {
        '50': '3.125rem',
      },
      colors: {
        primary: {
          dark: '#07063A',
          light: '#682B85',
        },
        secondary: '#FD6C4D',
      },
    },
  },
  plugins: [ plugin(navbarPlugin) ],
};
