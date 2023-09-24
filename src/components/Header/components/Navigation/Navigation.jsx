import React from 'react';
import ButtonAccount from '../../../../ui/ButtonAccount/ButtonAccount.jsx';
import ButtonBurger from '../../../../ui/ButtonBurger/ButtonBurger.jsx';
import ButtonLink from '../../../../ui/ButtonLink/ButtonLink.jsx';

const Navigation = ({ handleOpenMenu, isOpen }) => {
  const loggedIn = true;
  return (
    <nav className='navigation'>
      {loggedIn && <ul className='navigation__nav'>
        <li className='navigation__item navigation__item_size_lg'>
          <ButtonLink title='Фильмы' link='/movies'/>
        </li>
        <li className='navigation__item navigation__item_size_lg'>
          <ButtonLink title='Сохранённые фильмы' link='/saved-movies'/>
        </li>
        <li className='navigation__item navigation__item_size_sm'>
          <ButtonBurger handleOpenMenu={handleOpenMenu} isOpenMenu={isOpen}></ButtonBurger>
        </li>
      </ul>}
      <ul className='navigation__buttons'>
        {
          loggedIn
          && <li className='navigation__item navigation__item_size_lg'><ButtonAccount></ButtonAccount>
          </li>}
        {!loggedIn && <>
          <li className='navigation__item'>
            <ButtonLink title='Регистрация' link='/signup'/>
          </li>
          <li className='navigation__item'>
            <ButtonLink title='Войти' link='/signin'/>
          </li>
        </>}
      </ul>
    </nav>
  );
};
export default Navigation;
