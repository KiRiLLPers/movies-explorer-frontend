import React from 'react';

const Footer = () => (
  <footer className='footer'>
    <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <ul className='footer__items'>
      <li className='footer__item'>© 2023</li>
      <li className='footer__item'>
        <a target={'_blank'} href='https://practicum.yandex.ru/'
              className='footer__link' rel="noreferrer">Яндекс.Практикум</a>
        <a target={'_blank'} href='https://github.com/KiRiLLPers'
              className='footer__link' rel="noreferrer">Github</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
