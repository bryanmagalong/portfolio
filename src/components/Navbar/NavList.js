import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as DownloadIcon } from './../../assets/icons/download.svg';
import myResume from './../../assets/cv_bryan_magalong_react.pdf';

const NavList = ({ show, toggleMenu }) => (
  <div
    className={`pt-dropdown w-full lg:block lg:w-auto lg:pt-0 ${show
      ? 'block'
      : 'hidden'}`}
  >
    <nav>
      <ul className="flex flex-col items-center lg:flex-row gap-y-7 lg:gap-x-50">
        <li>
          <NavLink
            className="link"
            exact
            to="/"
            onClick={() => toggleMenu(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            exact
            to="/skillset"
            onClick={() => toggleMenu(false)}
          >
            Skillset
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            exact
            to="/projects"
            onClick={() => toggleMenu(false)}
          >
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
);

export default NavList;
