import React from 'react';

const Portfolio = () => (
  <section className='portfolio' id='portfolio'>
    <h2 className='portfolio__title'>Портфолио</h2>
    <div className="portfolio__items">
      <a
        className='portfolio__link'
        target={'_blank'}
        href='https://github.com/KiRiLLPers/how-to-learn' rel="noreferrer"
      >
        Статичный сайт
        <span className='portfolio__icon'></span>
      </a>
      <a
        className='portfolio__link'
        target={'_blank'}
        href='https://github.com/KiRiLLPers/russian-travel' rel="noreferrer"
      >
        Адаптивный сайт
        <span className='portfolio__icon'></span>
      </a>
      <a
        className='portfolio__link'
        target={'_blank'}
        href='https://github.com/KiRiLLPers/react-mesto-api-full-gha' rel="noreferrer"
      >
        Одностраничное приложение
        <span className='portfolio__icon'></span>
      </a>
    </div>
  </section>
);

export default Portfolio;
