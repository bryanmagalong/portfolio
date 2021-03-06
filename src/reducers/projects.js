import chatAppImg from './../assets/projects/chat-app.svg';
import orinjin from './../assets/projects/orinjin.svg';

const initialState = {
  list: [
    {
      imgSrc: chatAppImg,
      title: 'Chat App Landing Page',
      techList: [ 'React', 'TailwindCSS' ],
      description:
        'A little front-end challenge I picked from Frontend Mentor website. The project consists in building a responsive landing page for a chat application from scratch by following the provided design.',
      github: 'https://github.com/bryanmagalong/chat-app-css-react',
      website: 'https://magalong-frontendmentor-chat-challenge.netlify.app/',
    },
    {
      imgSrc: orinjin,
      title: "O'Rinjin",
      techList: [ 'React', 'SemanticUI', 'Symfony' ],
      description:
        "O’Rinjin is a website that allows you to develop a non-profit support network in order to get or give any kind of help to your neighbors. It can be for reparations, gardening, carpooling and more. An interactive map is also available in order to locate offers and demands in your area easily. This is my final project of my web development training course at O'Clock school. I worked on it with another front-end developer and two back-end developers.",
      github: 'https://github.com/bryanmagalong/orinjin',
      website: '',
    },
  ],
};

const projects = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projects;
