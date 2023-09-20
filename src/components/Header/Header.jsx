import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Logo from '../../ui/Logo/Logo.jsx';

const Header = () => (
    <header className='header'>
      <Logo></Logo>
      <Navigation></Navigation>
    </header>
);

export default Header;
