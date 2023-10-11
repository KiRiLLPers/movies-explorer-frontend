import React from 'react';
import { Link } from 'react-router-dom';
import { MOVIES_API_URL } from '../../constants';

const Card = ({ handleSaveOrDeleteMovie, movie }) => {
  const location = window.location.pathname;
  const changeDuration = (time) => {
    const hours = Math.floor(time / 60);
    const minuts = time % 60;

    return `${hours ? `${hours}ч` : ''} ${minuts}м`;
  };

  const handleClick = () => {
    handleSaveOrDeleteMovie(movie);
  };

  return (
    <ul className='card'>
      <li>
        <Link
        className='card__link'
        to={movie.trailerLink}
        target='_blank'
      >
        <img
          className='card__img'
          src={`${location === '/movies' ? MOVIES_API_URL + movie.image.url : movie.image}`}
          alt={movie.nameRU}
        />
      </Link>
      </li>
      <li>
        <div className='card__wrap'>
          <h2 className="card__name">{movie.nameRU}</h2>
          <p className="card__time">{changeDuration(movie.duration)}</p>
        </div>
      </li>
      <li>
        {location === '/movies'
          && <button
            className={`card__button ${movie.isLiked ? 'card__button_save' : ''}`}
            onClick={handleClick}
            type='button'
          >
            {!movie.isLiked ? 'Сохранить' : ''}
          </button>}
        {location === '/saved-movies' && <button
            type='button'
            className='card__button card__button_delete'
            onClick={handleClick}></button>}</li>
    </ul>
  );
};

export default Card;
