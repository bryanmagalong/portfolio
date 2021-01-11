import React from 'react';

const Navbar = () => (
  <div className="navbar fixed lg:navbar-lg w-full flex flex-wrap lg:flex-nowrap justify-between items-center bg-primary-dark text-white">
    <a href="#home">Magalong</a>
    <label for="menu-toggle" className="lg:hidden block">
      Menu
    </label>
    <input
      className="hidden checked:drop-visible"
      type="checkbox"
      id="menu-toggle"
    />
    <div
      className="hidden pt-dropdown w-full lg:block lg:w-auto lg:pt-0"
      id="menu"
    >
      <nav>
        <ul className="flex flex-col items-center lg:flex-row gap-y-7 lg:gap-x-50">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skillset">Skillset</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#projects">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navbar;
