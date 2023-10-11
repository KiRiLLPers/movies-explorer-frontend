import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo.jsx';
import InputMain from '../../ui/InputMain/InputMain.jsx';
import ButtonSign from '../../ui/ButtonSign/ButtonSign.jsx';
import { auth } from '../../api/AuthApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../api/MainApi';
import { VALIDATION_ERROR_TEXT, EMAIL_PATTERN, NAME_PATTERN } from '../../constants';
import useForm from '../../hooks/useForm';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({ name: '', email: '', password: '' });
  const { userData, setUserData } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState(null);
  const {
    errors, isValid, handleChangeInput,
  } = useForm();
  const navigate = useNavigate();

  const getUserInfo = (token) => {
    mainApi
      .getUserInfo(token).then((data) => {
        setUserData({
          ...userData, name: data.name, email: data.email, loggedIn: true,
        });
      });
  };
  const authorize = ({ email, password }) => {
    auth.authorize({ email, password })
      .then((res) => {
        getUserInfo(res.token);
        localStorage.setItem('jwt', res.token);
        setUserData({
          ...userData, name: res.name, email: res.email, loggedIn: true,
        });
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    auth.register(formValue)
      .then((res) => {
        if (res) {
          authorize(formValue);
        }
      })
      .catch((err) => {
        if (err === 409) {
          setErrorText(VALIDATION_ERROR_TEXT.register['409']);
        } else if (err === 400) {
          setErrorText(VALIDATION_ERROR_TEXT.register['400']);
        } else {
          setErrorText(VALIDATION_ERROR_TEXT['500']);
        }
      })
      .finally(() => {
        setIsLoading(false);
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
  return (
  <main className='register'>
  <section className='register__section'>
    <Logo></Logo>
    <h1 className="register__title">Добро пожаловать!</h1>
    <form className='register__form'>
      <InputMain
        label='Имя'
        type='text'
        name={'name'}
        error={errors.name}
        onChange={hadnleChangeInput}
        minLength={2}
        pattern={NAME_PATTERN}
      />
      <InputMain
        label='E-mail'
        type='email'
        name={'email'}
        error={errors.email}
        onChange={hadnleChangeInput}
        pattern={EMAIL_PATTERN}
      />
      <InputMain
        label='Пароль'
        type='password'
        name={'password'}
        error={errors.password}
        onChange={hadnleChangeInput}
        minLength={8}
      />
    </form>
    <span className='register__error'>{errorText}</span>
    <ButtonSign
      title='Зарегистироваться'
      isLoading={isLoading}
      isValid={isValid}
      onSubmit={handleSubmit}
    />
    <p
      className="register__question"
    >
      Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link>
    </p>
  </section>
</main>);
};

export default Register;
