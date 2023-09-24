import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonLink = ({ link, title }) => (
  <button className='button-link' type='button'><NavLink className={`link ${link === '/signin' ? 'link_login' : ''} ${window.location.pathname === link ? 'link_active' : ''}`} to={link}>{title}</NavLink></button>
);

export default ButtonLink;
