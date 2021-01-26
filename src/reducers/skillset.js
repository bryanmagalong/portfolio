const initialState = {
  skillList: [
    {
      name: 'HTML',
      learning: false,
    },
    {
      name: 'CSS',
      learning: false,
    },
    {
      name: 'Javascript',
      learning: false,
    },
    {
      name: 'React',
      learning: false,
    },
    {
      name: 'Redux',
      learning: false,
    },
    {
      name: 'Bootstrap',
      learning: false,
    },
    {
      name: 'TailwindCSS',
      learning: true,
    },
    {
      name: 'PHP',
      learning: false,
    },
    {
      name: 'Node.js',
      learning: true,
    },
    {
      name: 'Express',
      learning: true,
    },
    {
      name: 'MongoDB',
      learning: true,
    },
  ],
  toolList: [
    {
      name: 'VSCode',
      learning: false,
    },
    {
      name: 'Git',
      learning: false,
    },
    {
      name: 'AdobeXD',
      learning: false,
    },
    {
      name: 'Postman',
      learning: false,
    },
  ],
};

const skillset = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default skillset;
