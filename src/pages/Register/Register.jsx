import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo.jsx';
import InputMain from '../../ui/InputMain/InputMain.jsx';
import ButtonSign from '../../ui/ButtonSign/ButtonSign.jsx';

const Register = () => (
    <main className='register'>
      <section className='register__section'>
        <Logo></Logo>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className='register__form'>
          <InputMain label='Имя' type='text'></InputMain>
          <InputMain label='E-mail' type='email'></InputMain>
          <InputMain label='Пароль' type='password' error='Что-то пошло не так...'></InputMain>
        </form>
        <ButtonSign title='Зарегистироваться'></ButtonSign>
        <p className="register__question">Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link></p>
      </section>
    </main>
);

export default Register;
