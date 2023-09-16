import React from 'react';
import ButtonAccount from '../../../../ui/ButtonAccount/ButtonAccount.jsx';
import ButtonBurger from '../../../../ui/ButtonBurger/ButtonBurger.jsx';

const Navigation = () => {
  const loggedIn = true;
  return (
    <nav className='navigation'>
      {loggedIn && <ul className='navigation__nav'>
        <li className='navigation__item navigation__item_size-lg'>
          <button className='navigation__button' type='button'>Фильмы</button>
        </li>
        <li className='navigation__item navigation__item_size-lg'>
          <button className='navigation__button' type='button'>Сохранённые фильмы</button>
        </li>
        <li className='navigation__item navigation__item_size_sm'>
          <ButtonBurger></ButtonBurger>
        </li>
      </ul>}
      <ul className='navigation__buttons'>
        {loggedIn && <li className='navigation__item navigation__item_size-lg'><ButtonAccount></ButtonAccount></li>}
        {!loggedIn && <>
          <li className='navigation__item'>
          <button className='navigation__button'>Регистрация</button>
        </li>
          <li className='navigation__item'>
          <button className='navigation__button navigation__button_login'>Войти</button>
          </li>
        </>}
      </ul>
    </nav>
  );
};
export default Navigation;
