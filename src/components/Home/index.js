import React from 'react';
import { ReactComponent as HomePic } from './../../assets/home-pic-1.svg';

const Home = () => (
  <div className="pt-16 lg:flex lg:gap-x-50">
    <div className="text-white flex flex-col justify-center gap-y-26">
      <p className="text-lg lg:text-xl font-bold uppercase">
        Hello world! I'm <span className="text-secondary">Bryan Magalong</span>.
        Welcome to my website.
      </p>
      <div className="grid md:grid-cols-3 xl:grid-cols-1">
        <div className="md:col-span-2 md:flex md:items-center">
          <p className="text-lg">
            I’m a <span className="text-secondary">web developer</span> focused
            on <span className="text-secondary">front-end</span> stack but open
            to full stack opportunities. I have a great affinity with{' '}
            <span className="text-secondary">Javascript</span> and one of its
            library: <span className="text-secondary">React</span>.
          </p>
        </div>
        <HomePic
          className="hidden md:block xl:hidden"
          width={200}
          height={200}
        />
      </div>
    </div>
    <div>
      <HomePic
        className="hidden xl:block xl:flex xl:items-center"
        width={500}
        height={500}
      />
    </div>
  </div>
);

export default Home;
