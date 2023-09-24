import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Logo from '../../ui/Logo/Logo.jsx';
import MenuPopup from '../MenuPopup/MenuPopup.jsx';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  console.log(window.location.pathname);
  const handleOpenMenu = () => {
    setIsOpenMenu(() => !isOpenMenu);
  };

  return (
    <>
      <header className='header'>
        <Logo></Logo>
        <Navigation handleOpenMenu={handleOpenMenu} isOpen={isOpenMenu}></Navigation>
      </header>
      <MenuPopup isOpen={isOpenMenu} setIsOpenMenu={setIsOpenMenu}></MenuPopup>
    </>
  );
};

export default Header;
