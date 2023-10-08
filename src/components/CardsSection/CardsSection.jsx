import React, { useEffect, useState } from 'react';
import Card from '../../ui/Card/Card.jsx';
import Preloader from '../../ui/Preloader/Preloader.jsx';
import { moviesCardUpdateAfterResize } from '../../constants';

const CardsSection = ({
  movieArray, path, isLoading, error, handleSaveOrDeleteMovie,
}) => {
  const { initialCount, moreCount } = moviesCardUpdateAfterResize(window.innerWidth);
  const [movieMoreCount, setMovieMoreCount] = useState(moreCount);
  const [totalMovieCount, setTotalMovieCount] = useState(initialCount);
  const handleClickMoreMovies = () => {
    setTotalMovieCount(totalMovieCount + movieMoreCount);
  };

  const moviesCardUpdate = () => {
    const updateWindowWidth = moviesCardUpdateAfterResize(window.innerWidth);
    setMovieMoreCount(updateWindowWidth.moreCount);
    return window.innerWidth;
  };

  useEffect(() => {
    moviesCardUpdate();
    setTimeout(() => {
      window.addEventListener('resize', moviesCardUpdate);
    }, 50);

    return () => window.removeEventListener('resize', moviesCardUpdate);
  }, [moviesCardUpdate]);
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
      </div> : <span className='cards__error'>{error}</span>}</>
  );
};
export default CardsSection;
