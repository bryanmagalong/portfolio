import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as DownloadIcon } from './../assets/icons/download.svg';
import myResume from './../assets/cv_bryan_magalong_react.pdf';

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
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/skillset">
              Skillset
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <a
              className="flex items-center gap-x-2 px-18 py-2 rounded-full border hover:bg-white hover:text-secondary transition ease-in-out"
              href={myResume}
              download="bryan_magalong_resume"
            >
              <DownloadIcon />My Resume (fr)
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navbar;
