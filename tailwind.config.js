const plugin = require('tailwindcss/plugin');
const navbarPlugin = require('./src/plugins/navbar-plugin');
const textPlugin = require('./src/plugins/text-plugin');

module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xl: '1440px',
      },
      spacing: {
        //====== x axis
        sm: '2.063rem',
        lg: '8.563rem',
        'text-gutter-y': '1.500rem',
        'contact-gutter-y': '0.563rem',
        dropdown: '1.250rem',

        '10': '0.625rem',
        '18': '1.125rem',
        '26': '1.625rem',
        '35': '2.188rem',
        '41': '2.563rem',
        '45': '2.813rem',
        '50': '3.125rem',
        '60': '6rem',
        '106': '6.625rem',
        '115': '7.188rem',
        '242': '15.125rem',
      },
      fontSize: {
        sm: '0.688em',
        lg: '1.625em',
        xl: '2.250em',
        social: '1.313em',
        contact: '2.313em',
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
  plugins: [ plugin(navbarPlugin), plugin(textPlugin) ],
};
