import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAccount from '../../ui/ButtonAccount/ButtonAccount.jsx';

const MenuPopup = ({ isOpen, setIsOpenMenu }) => {
  const handleCloseMenu = () => {
    setIsOpenMenu(() => !isOpen);
  };
  return (
    <div className={`menu-popup ${isOpen ? 'menu-popup_active' : ''}`}>
      <div className={`menu-popup__wrap ${isOpen ? 'menu-popup__wrap_active' : ''}`}>
        <button className='menu-popup__close' onClick={handleCloseMenu}></button>
        <div className='menu-popup__header'>
          <Link className={`menu-popup__link ${window.location.pathname === '/' ? 'menu-popup__link_active' : ''}`} to='/'>Главная</Link>
          <Link className={`menu-popup__link ${window.location.pathname === '/movies' ? 'menu-popup__link_active' : ''}`} to='/movies'>Фильмы</Link>
          <Link className={`menu-popup__link ${window.location.pathname === '/saved-movies' ? 'menu-popup__link_active' : ''}`} to='/saved-movies'>Сохранённые фильмы</Link>
        </div>
        <ButtonAccount></ButtonAccount>
      </div>
    </div>
  );
};

export default MenuPopup;
