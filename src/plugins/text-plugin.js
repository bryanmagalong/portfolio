module.exports = ({ addComponents }) => {
  const texts = {
    '.title': {
      fontSize: '1.625em',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#FD6C4D',

      '&-lg': {
        fontSize: '2.250em',
      },
    },

    '.learning': {
      '&:before': {
        display: 'block',
        position: 'absolute',
        top: '20px',
        left: '9px',
        transform: 'rotate(-40deg)',
        content: '"Learning"',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },
    },
  };

  addComponents(texts, { variants: [ 'responsive' ] });
};
