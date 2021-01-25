import React from 'react';
import NavList from '../../containers/NavList';
import { ReactComponent as MenuIcon } from './../../assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from './../../assets/icons/close.svg';

const Navbar = ({ menuOpened, toggleMenu }) => {
  return (
    <div className="navbar fixed lg:navbar-lg w-full flex flex-wrap lg:flex-nowrap justify-between items-center bg-primary-dark text-white">
      <div className="flex flex-col uppercase font-bold">
        <span>Bryan</span>
        <span>Magalong</span>
      </div>
      <button
        type="button"
        className="block lg:hidden"
        onClick={() => toggleMenu(!menuOpened)}
      >
        {!menuOpened ? (
          <MenuIcon width={25} height={25} />
        ) : (
          <CloseIcon width={25} height={25} />
        )}
      </button>
      <NavList show={menuOpened} />
    </div>
  );
};

export default Navbar;
