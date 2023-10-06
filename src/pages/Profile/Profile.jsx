import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import ButtonSign from '../../ui/ButtonSign/ButtonSign.jsx';
import InputMain from '../../ui/InputMain/InputMain.jsx';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';
import { mainApi } from '../../api/MainApi';
import { validationErrorText } from '../../constants';

const Profile = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [formValue, setFormValue] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const {
    errors, isValid, handleChangeInput,
  } = useForm();
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(CurrentUserContext);

  const handleCorrectProfile = () => {
    setIsCorrect(() => !isCorrect);
    setErrorText('');
  };
  const logOut = () => {
    setUserData({ ...userData, loggedIn: false });
    localStorage.clear();
    navigate('/', { replace: true });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    if (formValue.name !== userData.name || formValue.email !== userData.email) {
      mainApi
        .updateUserProfile(formValue, localStorage.getItem('jwt'))
        .then((res) => {
          console.log(res);
          setIsCorrect(false);
          setUserData({ ...userData, name: formValue.name, email: formValue.email });
          setErrorText('');
        })
        .catch((err) => {
          if (err === 409) {
            setErrorText(validationErrorText.profile['409']);
          } else if (err === 400) {
            setErrorText(validationErrorText.profile['400']);
          } else {
            setErrorText(validationErrorText['500']);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleChange = (e) => {
    handleChangeInput(e);
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  useEffect(() => {
    setFormValue({
      name: userData.name,
      email: userData.email,
    });
  }, []);

  const isNewUserData = formValue.name === userData.name && formValue.email === userData.email;
  console.log(isNewUserData);
  return (
    <div className='body'>
      <Header></Header>
      <main className='main'>
        <section className="profile">
          <div className="profile__wrap">
            <h1 className="profile__title">Привет, Виталий!</h1>
            {isCorrect
              ? <form className='profile__form'>
                <InputMain
                  type='text'
                  label='Имя'
                  name='name'
                  value={userData.name ? userData.name : ''}
                  onChange={handleChange}
                  error={errors.name}
                />
                <InputMain
                  type='email'
                  label='Email'
                  name='email'
                  value={userData.email ? userData.email : ''}
                  onChange={handleChange}
                  error={errors.email}
                />
              </form>
              : <ul className="profile__info">
                <li className="profile__item">Имя<span>{userData.name}</span></li>
                <li className="profile__item">E-mail<span>{userData.email}</span></li>
              </ul>
            }
            <div className='profile__button-wrap'>
              <span className='profile__error'>{errorText}</span>
              {isCorrect
                ? <>
                  <ButtonSign
                  title='Сохранить'
                  isValid={isValid}
                  onSubmit={handleSubmit}
                  isLoading={isLoading}
                  isNewUserData={isNewUserData}
                />
                  <ButtonSign
                    title='Назад'
                    onClick={handleCorrectProfile}/>
                </>
                : <div className="profile__buttons">
                  <button className="profile__button" onClick={handleCorrectProfile}>Редактировать
                  </button>
                  <button className="profile__button" onClick={logOut}>Выйти из аккаунта</button>
                </div>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
