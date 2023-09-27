import React, { useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import ButtonSign from '../../ui/ButtonSign/ButtonSign.jsx';
import InputMain from '../../ui/InputMain/InputMain.jsx';

const Profile = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const handleCorrectProfile = () => {
    setIsCorrect(() => !isCorrect);
  };
  return (
    <div className='body'>
      <Header></Header>
      <main className='main'>
        <section className="profile">
          <div className="profile__wrap">
            <h1 className="profile__title">Привет, Виталий!</h1>
            {isCorrect
              ? <form className='profile__form'>
                <InputMain type='text' label='Имя'></InputMain>
                <InputMain type='email' label='Email'></InputMain>
              </form>
              : <ul className="profile__info">
                <li className="profile__item">Имя<span>Виталий</span></li>
                <li className="profile__item">E-mail<span>pochta@yandex.ru</span></li>
              </ul>
            }
            <div className='profile__button-wrap'>
              <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
              {isCorrect
                ? <ButtonSign title='Сохранить'></ButtonSign>
                : <div className="profile__buttons">
                  <button className="profile__button" onClick={handleCorrectProfile}>Редактировать
                  </button>
                  <button className="profile__button">Выйти из аккаунта</button>
                </div>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
