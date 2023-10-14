import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SearchSection from '../../components/SearchSection/SearchSection.jsx';
import CardsSection from '../../components/CardsSection/CardsSection.jsx';
import { mainApi } from '../../api/MainApi';
import { filtered } from '../../utils/Filtered';

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesFiltered, setSavedMoviesFiltered] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputTextFilter, setInputTextFilter] = useState('');
  const [errorText, setErorText] = useState('');
  const [errorInputSearchText, setErrorInputSearchText] = useState('');

  const handleSearchInput = (e) => {
    setInputText(e.target.value);
  };

  const handleChecked = (e) => {
    console.log(isChecked);
    setIsChecked(!!e.target.checked);
    const filteredArray = filtered(
      savedMovies,
      { search: inputTextFilter, checked: e.target.checked },
    );
    if (filteredArray.length === 0) {
      setErorText('Ничего не найдено');
    }
    setSavedMoviesFiltered(filteredArray);
  };

  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(movie.id, localStorage.getItem('jwt'))
      .then(() => {
        const savedMoviesArray = savedMovies
          .filter((el) => el.id !== movie.id);
        setSavedMovies([...savedMoviesArray]);
        localStorage.setItem('savedMovies', JSON.stringify(savedMoviesArray));
        const savedMoviesArrayFiltered = filtered(
          savedMoviesArray,
          { search: inputTextFilter, checked: isChecked },
        );
        setSavedMoviesFiltered(savedMoviesArrayFiltered);
        if (savedMoviesArray.length === 0) {
          setErorText('Нет сохраненных фильмов');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFilteredSavedMovies = (text) => {
    const filteredArray = filtered(
      savedMovies,
      { search: text, checked: isChecked },
    );
    if (filteredArray.length === 0) {
      setErorText('Ничего не найдено');
    }
    setSavedMoviesFiltered(filteredArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputTextFilter(inputText);
    if (inputText === '') {
      setErrorInputSearchText('Введите ключевое слово');
      return;
    }
    handleFilteredSavedMovies(inputText);
    setErrorInputSearchText('');
  };

  useEffect(() => {
    mainApi
      .getSavedMovies(localStorage.getItem('jwt'))
      .then((movies) => {
        if (movies.length === 0) {
          setErorText('Нет сохраненных фильмов');
        }
        if (movies.length) {
          setSavedMovies([...movies]);
          setSavedMoviesFiltered([...movies]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='body-saved'>
      <Header></Header>
      <main className='main-saved'>
        <SearchSection
          handleChecked={handleChecked}
          onChange={handleSearchInput}
          onSubmit={handleSubmit}
          value={inputText}
          errorText={errorInputSearchText}
        >
        </SearchSection>
        <CardsSection
          error={errorText}
          movieArray={savedMoviesFiltered || savedMovies}
          handleSaveOrDeleteMovie={handleDeleteMovie}
        >
        </CardsSection>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SavedMovies;
