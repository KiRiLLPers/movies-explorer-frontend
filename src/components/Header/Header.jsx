import React from 'react';
import logo from '../../images/header/logo.svg';
import Navigation from './components/Navigation/Navigation.jsx';

const Header = () => (
    <header className='header'>
      <img className='header__logo' src={logo} alt="logo"/>
      <Navigation></Navigation>
    </header>
);

export default Header;
