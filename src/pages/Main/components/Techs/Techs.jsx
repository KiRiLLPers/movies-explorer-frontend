import React from 'react';
import SectionTitle from '../../../../ui/SectionTitle/SectionTitle.jsx';

const Techs = () => (
  <section className='techs' id='techs'>
    <SectionTitle title='Технологии'></SectionTitle>
    <div className='techs__wrap'>
      <h2 className='techs__title'>7 технологий</h2>
      <p className='techs__text'>На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили
        в&nbsp;дипломном проекте.</p>
      <ul className='techs__items'>
        <li className='techs__item'>HTML</li>
        <li className='techs__item'>CSS</li>
        <li className='techs__item'>JS</li>
        <li className='techs__item'>React</li>
        <li className='techs__item'>Git</li>
        <li className='techs__item'>Express.js</li>
        <li className='techs__item'>mongoDB</li>
      </ul>
    </div>
  </section>
);

export default Techs;
