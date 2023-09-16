import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className='footer'>
    <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <ul className='footer__items'>
      <li className='footer__item'>© 2020</li>
      <li className='footer__item'>
        <Link className='footer__link'>Яндекс.Практикум</Link>
        <Link className='footer__link'>Github</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
