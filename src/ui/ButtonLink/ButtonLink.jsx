import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ link, title }) => (
  <button className='button-link' type='button'><Link className={`link ${link === '/signin' ? 'link_login' : ''} ${window.location.pathname === link ? 'link_active' : ''}`} to={link}>{title}</Link></button>
);

export default ButtonLink;
