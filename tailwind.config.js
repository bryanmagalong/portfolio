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
        'text-gutter-y': '1.500rem',
        'contact-gutter-y': '0.563rem',
        dropdown: '1.250rem',

        '45': '2.813rem',
        '26': '1.625em',
        'home-top': '13.625rem',
        'home-bottom': '10.125em',
      },
      gap: {
        '50': '3.125rem',
        '41': '2.563em',
        '18': '1.125em',
      },
      fontSize: {
        contact: '2.313em',
        social: '1.313em',
        sm: '0.688em',
        lg: '1.625em',
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
