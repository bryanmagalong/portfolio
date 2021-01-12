import React from 'react';
import homePic from './../../assets/home-pic-1.svg';

const Home = () => (
  <div className="pt-home-top pb-home-bottom">
    <div className="text-white">
      <p className="text-lg font-bold uppercase">
        Hello world! I'm <span className="text-secondary">Bryan Magalong</span>.
        Welcome to my website.
      </p>
      <p className="text-lg mt-26">
        I’m a <span className="text-secondary">web developer</span> focused on{' '}
        <span className="text-secondary">front-end</span> stack but open to full
        stack opportunities. I have a great affinity with{' '}
        <span className="text-secondary">Javascript</span> and one of its
        library: <span className="text-secondary">React</span>.
      </p>
    </div>
    <img src={homePic} className="hidden lg:block" alt="home" />
  </div>
);

export default Home;
