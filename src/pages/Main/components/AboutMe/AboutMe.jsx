import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../../ui/SectionTitle/SectionTitle.jsx';
import photo from '../../../../images/about-me/photo.png';

const AboutMe = () => (
  <section className='about-me' id='about-me'>
    <SectionTitle title='Студент'></SectionTitle>
    <div className="about-me__wrap">
      <div className='about-me__info-wrap'>
        <h2 className="about-me__title">Виталий</h2>
        <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__biography">
          Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня
          есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку,
          а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал
          в&nbsp;компании &laquo;СКБ Контур&raquo;.
          После того, как прошёл курс по&nbsp;веб-разработке, начал
          заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
        </p>
        <Link target={'_blank'} to={'https://github.com/KiRiLLPers'}
              className="about-me__github">Github</Link>
      </div>
      <img className='about-me__photo' src={photo} alt="фото"/>
    </div>
  </section>
);

export default AboutMe;
