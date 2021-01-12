import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar fixed lg:navbar-lg w-full flex flex-wrap lg:flex-nowrap justify-between items-center bg-primary-dark text-white">
    <a href="#home">Magalong</a>
    <label htmlFor="menu-toggle" className="lg:hidden block">
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
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/skillset">
            Skillset
          </NavLink>
          <NavLink exact to="/projects">
            Projects
          </NavLink>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navbar;
