import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo.jsx';
import InputMain from '../../ui/InputMain/InputMain.jsx';
import ButtonSign from '../../ui/ButtonSign/ButtonSign.jsx';
import { auth } from '../../api/AuthApi';
import { mainApi } from '../../api/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';
import { VALIDATION_ERROR_TEXT, EMAIL_PATTERN } from '../../constants';

const Login = () => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { userData, setUserData } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const {
    errors, isValid, handleChangeInput,
  } = useForm();
  const [errorText, setErrorText] = useState(null);
  const getUserInfo = (token) => {
    mainApi
      .getUserInfo(token).then((data) => {
        setUserData({
          ...userData, name: data.name, email: data.email, loggedIn: true,
        });
      });
  };

  const hadnleChangeInput = (e) => {
    handleChangeInput(e);
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    auth.authorize(formValue)
      .then((res) => {
        getUserInfo(res.token);
        localStorage.setItem('jwt', res.token);
        setUserData({
          ...userData, name: res.name, email: res.email, loggedIn: true,
        });
        navigate('/movies', { replace: true });
        setIsLoading(false);
      })
      .catch((err) => {
        if (err === 401) {
          setErrorText(VALIDATION_ERROR_TEXT.login['401']);
        } else if (err === 400) {
          setErrorText(VALIDATION_ERROR_TEXT.login['400']);
        } else {
          setErrorText(VALIDATION_ERROR_TEXT['500']);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <main className='login'>
      <section className='login__section'>
        <Logo></Logo>
        <h1 className="login__title">Рады видеть!</h1>
        <form className='login__form' noValidate>
          <InputMain
            label='E-mail'
            type='email'
            name='email'
            onChange={hadnleChangeInput}
            isLoading={isLoading}
            error={errors.email}
            pattern={EMAIL_PATTERN}
          >
          </InputMain>
          <InputMain
            label='Пароль'
            type='password'
            name='password'
            onChange={hadnleChangeInput}
            isLoading={isLoading}
            error={errors.password}
            minLength={8}
          >
          </InputMain>
        </form>
        <span className='login__error'>{errorText}</span>
        <ButtonSign title='Войти' isLoading={isLoading} isValid={isValid} onSubmit={handleSubmit}></ButtonSign>
        <p className="login__question">Еще не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link></p>
      </section>
    </main>
  );
};

export default Login;
