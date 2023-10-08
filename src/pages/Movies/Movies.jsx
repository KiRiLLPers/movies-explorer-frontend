import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SearchSection from '../../components/SearchSection/SearchSection.jsx';
import CardsSection from '../../components/CardsSection/CardsSection.jsx';
import { moviesApi } from '../../api/MoviesApi';
import { MoviesContext } from '../../contexts/MoviesContext';
import { mainApi } from '../../api/MainApi';
import { moviesApiUrl } from '../../constants';
import { filteredMovies } from '../../utils/FilteredMovies';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { moviesData, setMoviesData } = useContext(MoviesContext);
  const [errorText, setErrorText] = useState('');
  const handleSearchInput = (e) => {
    setMoviesData({ ...moviesData, moviesSearchText: e.target.value.toLowerCase() });
  };

  const prepareData = (movies) => {
    const filteredArray = filteredMovies({ ...moviesData, moviesArray: movies });
    setMoviesData({ ...moviesData, moviesArray: movies, moviesFiltered: filteredArray });
    localStorage.setItem('movies', JSON.stringify(moviesData));
  };

  const [savedMovies, setIsSavedMovies] = useState([]);
  const handleChecked = (e) => {
    if (e.target.checked) {
      const filteredArray = filteredMovies({ ...moviesData, moviesCheckboxFiltered: true });
      setMoviesData({ ...moviesData, moviesFiltered: filteredArray, moviesCheckboxFiltered: true });
      localStorage.setItem('movies', JSON.stringify(moviesData));
    } else {
      const filteredArray = filteredMovies({ ...moviesData, moviesCheckboxFiltered: false });
      setMoviesData(
        { ...moviesData, moviesFiltered: filteredArray, moviesCheckboxFiltered: false },
      );
      localStorage.setItem('movies', JSON.stringify(moviesData));
    }
  };

  const handleSaveOrDeleteMovie = (movie) => {
    const isSavedMovie = movie.isLiked;
    if (isSavedMovie) {
      mainApi
        .deleteMovie(movie.id, localStorage.getItem('jwt'))
        .then(() => {
          const newArray = moviesData.moviesFiltered.map((el) => {
            if (movie.id === el.id) {
              return { ...el, isLiked: false };
            }
            return el;
          });
          setMoviesData({ ...moviesData, moviesFiltered: newArray });
          const savedMoviesArray = savedMovies
            .filter((el) => el.id !== movie.id);
          setIsSavedMovies([...savedMoviesArray]);
          localStorage.setItem('movies', JSON.stringify(moviesData));
        });
    } else {
      const savedMovie = {
        country: movie.country,
        director: movie.director,
        year: movie.year,
        description: movie.description,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        duration: movie.duration,
        id: movie.id,
        image: `${moviesApiUrl}${movie.image.url}`,
        thumbnail: `${moviesApiUrl}${movie.image.formats.thumbnail.url}`,
      };
      mainApi
        .saveMovies(savedMovie, localStorage.getItem('jwt'))
        .then(() => {
          setIsSavedMovies([...savedMovies, savedMovie]);
          const newArray = moviesData.moviesFiltered.map((el) => {
            if (savedMovie.id === el.id) {
              return { ...el, isLiked: true };
            }
            return el;
          });
          setMoviesData({ ...moviesData, moviesFiltered: newArray });
          localStorage.setItem('movies', JSON.stringify(moviesData));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (moviesData.moviesSearchText === '') {
      setErrorText('Нужно ввести ключевое слово');
      return;
    }
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        prepareData(movies);
        if (moviesData.moviesFiltered.length === 0) {
          setErrorText('Ничего не найдено');
        }
      })
      .catch((err) => {
        if (err) {
          setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      moviesApi
        .getMovies()
        .then((movies) => {
          prepareData(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className='body'>
      <Header></Header>
      <main className='main-movies'>
        <SearchSection
        onSubmit={handleSearchSubmit}
        onChange={handleSearchInput}
        handleChecked={handleChecked}
        isChecked={moviesData.moviesCheckboxFiltered}
        value={moviesData.moviesSearchText}
        ></SearchSection>
        <CardsSection handleSaveOrDeleteMovie={handleSaveOrDeleteMovie} movieArray={moviesData.moviesFiltered} path={'/movies'} isLoading={isLoading} error={errorText}></CardsSection>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Movies;
