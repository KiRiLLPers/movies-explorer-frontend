import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo.jsx';
import InputMain from '../../ui/InputMain/InputMain.jsx';
import ButtonSign from '../../ui/ButtonSign/ButtonSign.jsx';

const Login = () => (
    <main className='login'>
      <section className='login__section'>
        <Logo></Logo>
        <h1 className="login__title">Рады видеть!</h1>
        <form className='login__form'>
          <InputMain label='E-mail'></InputMain>
          <InputMain label='Пароль'></InputMain>
        </form>
        <ButtonSign title='Войти'></ButtonSign>
        <p className="login__question">Еще не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link></p>
      </section>
    </main>
);

export default Login;
