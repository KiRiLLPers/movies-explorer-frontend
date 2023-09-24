import React, { useState } from 'react';
import photo from '../../images/card/film-photo.png';

const Card = ({ name, time, alt }) => {
  const [isSave, setIsSave] = useState(false);
  const handleClick = () => {
    setIsSave(() => !isSave);
  };

  return (
    <ul className='card'>
      <li><img className='card__img' src={photo} alt={alt}/></li>
      <li>
        <div className='card__wrap'>
          <h2 className="card__name">{name}</h2>
          <p className="card__time">{time}</p>
        </div>
      </li>
      <li>
        {window.location.pathname === '/movies'
          && <button
            className={`card__button ${isSave && 'card__button_save'}`}
            onClick={handleClick}
            type='button'
          >
            {!isSave ? 'Сохранить' : ''}
          </button>}
        {window.location.pathname === '/saved-movies' && <button
            type='button'
            className={`card__button ${!isSave && 'card__button_delete'}`}
            onClick={handleClick}></button>}</li>
    </ul>
  );
};

export default Card;
