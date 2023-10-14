import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SearchSection from '../../components/SearchSection/SearchSection.jsx';
import CardsSection from '../../components/CardsSection/CardsSection.jsx';
import { moviesApi } from '../../api/MoviesApi';
import { MoviesContext } from '../../contexts/MoviesContext';
import { mainApi } from '../../api/MainApi';
import { MOVIES_API_URL } from '../../constants';
import { markLikedMovies } from '../../utils/MarkLikedMovies';
import { filtered } from '../../utils/Filtered';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { moviesData, setMoviesData } = useContext(MoviesContext);
  const [errorText, setErrorText] = useState('');
  const [movies, setMovies] = useState([]);
  const [errorInputSearchText, setErrorInputSearchText] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  const handleSearchInput = (e) => {
    setMoviesData({ ...moviesData, moviesSearchText: e.target.value.toLowerCase() });
  };

  const prepareData = (movies) => {
    setMovies(movies);
    const filteredArray = filtered(
      movies,
      { search: moviesData.moviesSearchText, checked: moviesData.moviesCheckboxFiltered },
    );
    const moviesObj = {
      ...moviesData,
      moviesFiltered: filteredArray,
    };

    localStorage.setItem('movies', JSON.stringify(movies));
    markLikedMovies(moviesObj, setMoviesData);
  };

  const handleChecked = (e) => {
    const filteredArray = filtered(
      movies,
      { search: moviesData.moviesSearchText, checked: e.target.checked },
    );
    const moviesObj = {
      ...moviesData,
      moviesFiltered: filteredArray,
      moviesCheckboxFiltered: e.target.checked,
    };

    markLikedMovies(moviesObj, setMoviesData);
    if (moviesObj.moviesFiltered.length === 0) {
      setErrorText('Ничего не найдено');
    }
  };

  const handleSaveOrDeleteMovie = (movie) => {
    const isSavedMovie = movie.isLiked;
    if (isSavedMovie) {
      mainApi
        .deleteMovie(movie.id, localStorage.getItem('jwt'))
        .then(() => {
          const newSavedMovies = moviesData.moviesFiltered.map((el) => {
            if (movie.id === el.id) {
              return { ...el, isLiked: false };
            }
            return el;
          });
          setMoviesData({ ...moviesData, moviesFiltered: newSavedMovies });
          const savedMoviesArray = savedMovies
            .filter((el) => el.id !== movie.id);
          localStorage.setItem('savedMovies', JSON.stringify([...savedMoviesArray]));
          setSavedMovies([...savedMoviesArray]);
        })
        .catch((err) => {
          console.log(err);
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
        image: `${MOVIES_API_URL}${movie.image.url}`,
        thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
      };
      mainApi
        .saveMovies(savedMovie, localStorage.getItem('jwt'))
        .then(() => {
          console.log(savedMovies, savedMovie);
          localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, savedMovie]));
          setSavedMovies([...savedMovies, savedMovie]);
          const newArray = moviesData.moviesFiltered.map((el) => {
            if (savedMovie.id === el.id) {
              return { ...el, isLiked: true };
            }
            return el;
          });

          setMoviesData({ ...moviesData, moviesFiltered: newArray });
          localStorage.setItem('moviesFiltered', JSON.stringify({ ...moviesData, moviesFiltered: newArray }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (moviesData.moviesSearchText === '') {
      setErrorInputSearchText('Введите ключевое слово');
      return;
    }
    setErrorInputSearchText('');
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        prepareData(movies);
        if (moviesData.moviesFiltered.length === 0) {
          setErrorText('Ничего не найдено');
        }
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')));
    if (localStorage.getItem('moviesFiltered')) {
      const moviesFromLocalStorage = JSON.parse(localStorage.getItem('moviesFiltered'));
      const savedMoviesFromLocalStorage = JSON.parse(localStorage.getItem('savedMovies'));
      setSavedMovies(savedMoviesFromLocalStorage);
      if (savedMoviesFromLocalStorage) {
        const savedId = savedMoviesFromLocalStorage.map((el) => el.id);
        moviesFromLocalStorage.moviesFiltered.forEach((el) => {
          // eslint-disable-next-line no-param-reassign
          el.isLiked = !!savedId.includes(el.id);
        });
      }
      setMoviesData(moviesFromLocalStorage);
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
          errorText={errorInputSearchText}
        ></SearchSection>
        <CardsSection handleSaveOrDeleteMovie={handleSaveOrDeleteMovie} movieArray={moviesData.moviesFiltered} path={'/movies'} isLoading={isLoading} error={errorText}></CardsSection>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Movies;
