import React from 'react';
import Header from '../../components/Header/Header.jsx';

const Profile = () => (
  <div className='body'>
    <Header></Header>
    <main className='main'>
      <section className="profile">
        <div className="profile__wrap">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <ul className="profile__info">
            <li className="profile__item">Имя<span>Виталий</span></li>
            <li className="profile__item">E-mail<span>pochta@yandex.ru</span></li>
          </ul>
        </div>
        <div className="profile__buttons">
          <button className="profile__button">Редактировать</button>
          <button className="profile__button">Выйти из аккаунта</button>
        </div>
      </section>
    </main>
  </div>
);

export default Profile;
