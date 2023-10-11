import React, { useEffect, useState } from 'react';
import Card from '../../ui/Card/Card.jsx';
import Preloader from '../../ui/Preloader/Preloader.jsx';
import { moviesCardUpdateAfterResize } from '../../constants';

const CardsSection = ({
  movieArray, path, isLoading, error, handleSaveOrDeleteMovie,
}) => {
  const { initialCount, moreCount } = moviesCardUpdateAfterResize(window.innerWidth);
  const [movieMoreCount, setMovieMoreCount] = useState(moreCount);
  const [initCount, seInitCount] = useState(initialCount);
  const [totalMovieCount, setTotalMovieCount] = useState(initCount);
  const handleClickMoreMovies = () => {
    setTotalMovieCount(totalMovieCount + movieMoreCount);
  };

  const moviesCardUpdate = () => {
    const updateWindowWidth = moviesCardUpdateAfterResize(window.innerWidth);
    setMovieMoreCount(updateWindowWidth.moreCount);
    seInitCount(updateWindowWidth.initialCount);
    return window.innerWidth;
  };

  useEffect(() => {
    window.addEventListener('resize', moviesCardUpdate);

    return () => window.removeEventListener('resize', moviesCardUpdate);
  }, []);

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
