import React from 'react';
import SectionTitle from '../../../../ui/SectionTitle/SectionTitle.jsx';

const AboutProject = () => (
  <section className='about-project' id='about-project'>
    <SectionTitle title='О проекте'></SectionTitle>
    <div className='about-project__description'>
      <ul className='about-project__items'>
        <li className='about-project__item about-project__item_title'>Дипломный проект включал 5 этапов</li>
        <li className='about-project__item'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</li>
      </ul>
      <ul className='about-project__items'>
        <li className='about-project__item about-project__item_title'>На&nbsp;выполнение диплома ушло 5 недель</li>
        <li className='about-project__item'>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
      </ul>
    </div>
    <ul className='about-project__progress-bar'>
      <li className='about-project__progress-bar-time'>1 неделя</li>
      <li className='about-project__progress-bar-time'>4 недели</li>
    </ul>
    <ul className='about-project__progress-bar'>
      <li className='about-project__progress-bar-sprint'>Back-end</li>
      <li className='about-project__progress-bar-sprint'>Front-end</li>
    </ul>
  </section>
);

export default AboutProject;
