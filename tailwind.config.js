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
        '13': '0.813em',
        '18': '1.125rem',
        '26': '1.625rem',
        '30': '1.875em',
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
        project: '1.25em',
        techlist: '0.9em',
      },
      colors: {
        primary: {
          dark: '#07063A',
          light: '#682B85',
        },
        hover: '#AC52FC',
        secondary: '#FD6C4D',
      },
      keyframes: {
        slideintoright: {
          '0%': {
            transform: 'translateX(-50px)',
            opacity: '0',
          },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        slideintoleft: {
          '0%': {
            transform: 'translateX(50px)',
            opacity: '0',
          },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        slideintotop: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
      animation: {
        slideintoleft: 'slideintoleft 0.4s ease-in-out',
        slideintoright: 'slideintoright 0.4s ease-in-out',
        slideintotop: 'slideintotop 0.4s ease-in-out',
      },
    },
  },
  plugins: [ plugin(navbarPlugin), plugin(textPlugin) ],
};
