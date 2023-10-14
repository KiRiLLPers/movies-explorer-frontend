import React, { useEffect, useState } from 'react';
import Card from '../../ui/Card/Card.jsx';
import Preloader from '../../ui/Preloader/Preloader.jsx';
import { moviesCardUpdateAfterResize } from '../../constants';

const CardsSection = ({
  movieArray, path, isLoading, handleSaveOrDeleteMovie, error,
}) => {
  const { initialCount, moreCount } = moviesCardUpdateAfterResize(window.innerWidth);
  const [movieMoreCount, setMovieMoreCount] = useState(moreCount);
  const [initCount, setInitCount] = useState(initialCount);
  const [totalMovieCount, setTotalMovieCount] = useState(initCount);
  const [errorText, setErrorText] = useState('');
  const location = window.location.pathname;
  const handleClickMoreMovies = () => {
    setTotalMovieCount(totalMovieCount + movieMoreCount);
  };

  const moviesCardUpdate = () => {
    const updateWindowWidth = moviesCardUpdateAfterResize(window.innerWidth);
    setMovieMoreCount(updateWindowWidth.moreCount);
    setInitCount(updateWindowWidth.initialCount);
    console.log(updateWindowWidth.moreCount, updateWindowWidth.initialCount);
  };

  useEffect(() => {
    window.addEventListener('resize', moviesCardUpdate);

    return () => window.removeEventListener('resize', moviesCardUpdate);
  }, []);

  useEffect(() => {
    if (movieArray.length === 0 && location === '/movies') {
      setErrorText('');
    }

    if (movieArray.length === 0 && location === '/saved-movies') {
      setErrorText('Нет сохраненных фильмов');
    }
  }, [movieArray.length]);

  return (
      <>{movieArray.length ? <div className='cards'>
          {isLoading ? <Preloader></Preloader> : <>
              <div className='cards__wrap'>
                  {movieArray.slice(0, totalMovieCount).map((movie) => <Card
                    key={movie.id}
                    handleSaveOrDeleteMovie={handleSaveOrDeleteMovie}
                    movie={movie}
                  ></Card>)}
              </div>
              {movieArray && movieArray.length > totalMovieCount && path === '/movies'
                && <button className="cards__more" type='button' onClick={handleClickMoreMovies}>Еще</button>}
          </>}
      </div> : <span className='cards__error'>{error || errorText}</span>}</>
  );
};
export default CardsSection;
