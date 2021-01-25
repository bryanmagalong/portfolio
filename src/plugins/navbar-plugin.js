module.exports = ({ addComponents }) => {
  const navbar = {
    '.navbar': {
      minHeight: '3.500rem',
      padding: '1.250rem 1.625rem',
      zIndex: '1',
    },

    '.navbar-lg': {
      padding: '1.250rem 2.813rem',
    },

    '.link': {
      position: 'relative',
      textTransform: 'uppercase',

      '&:after': {
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        width: '0px',
        height: '2px',
        background: '#FD6C4D',
        content: '""',
        transition: 'all 0.3s',
      },

      '&:hover:after': {
        width: '100%',
      },
    },

    '.active': {
      color: '#FD6C4D',
      '&:after': {
        width: '100%',
      },
    },
  };

  addComponents(navbar, { variants: [ 'responsive', 'checked' ] });
};
