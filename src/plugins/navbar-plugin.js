module.exports = ({ addComponents }) => {
  const navbar = {
    '.navbar': {
      minHeight: '3.500rem',
      padding: '1.250rem 1.625rem',
    },

    '.navbar-lg': {
      padding: '1.250rem 2.813rem',
    },

    '.drop-visible': {
      '& + #menu': {
        display: 'block',
      },
    },
  };

  addComponents(navbar, { variants: [ 'responsive', 'checked' ] });
};
