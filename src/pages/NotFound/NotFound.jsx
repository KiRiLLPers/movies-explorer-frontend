import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className='not-found'>
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Link className='not-found__link' onClick={() => { navigate(-1); }}>Назад</Link>
    </section>
  );
};

export default NotFound;
