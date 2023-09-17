import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <section className='portfolio' id='portfolio'>
    <h2 className='portfolio__title'>Портфолио</h2>
    <div className="portfolio__items">
      <Link
        className='portfolio__link'
        target={'_blank'}
        to='https://github.com/KiRiLLPers/how-to-learn'
      >
        Статичный сайт
        <span className='portfolio__icon'></span>
      </Link>
      <Link
        className='portfolio__link'
        target={'_blank'}
        to='https://github.com/KiRiLLPers/russian-travel'
      >
        Адаптивный сайт
        <span className='portfolio__icon'></span>
      </Link>
      <Link
        className='portfolio__link'
        target={'_blank'}
        to='https://github.com/KiRiLLPers/react-mesto-api-full-gha'
      >
        Одностраничное приложение
        <span className='portfolio__icon'></span>
      </Link>
    </div>
  </section>
);

export default Portfolio;
