module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        navbar: '3.500rem',
      },
      spacing: {
        //====== x axis
        sm: '2.063rem',
        lg: '8.563rem',
        navbar: '1.625rem',
      },
      margin: {
        y: {
          title: '2.188rem',
        },
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
  plugins: [],
};
