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
  };

  addComponents(texts, { variants: [ 'responsive' ] });
};
