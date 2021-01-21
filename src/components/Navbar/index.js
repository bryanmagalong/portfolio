import React from 'react';
import NavList from '../../containers/NavList';

const Navbar = ({ menuOpened, toggleMenu }) => {
  return (
    <div className="navbar fixed lg:navbar-lg w-full flex flex-wrap lg:flex-nowrap justify-between items-center bg-primary-dark text-white">
      <a href="#home">Magalong</a>
      <button
        type="button"
        className="block lg:hidden"
        onClick={() => toggleMenu(!menuOpened)}
      >
        Menu
      </button>
      <NavList show={menuOpened} />
    </div>
  );
};

export default Navbar;
