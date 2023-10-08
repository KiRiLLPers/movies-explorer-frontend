import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SearchSection from '../../components/SearchSection/SearchSection.jsx';
import CardsSection from '../../components/CardsSection/CardsSection.jsx';
import { mainApi } from '../../api/MainApi';

const SavedMovies = () => {
  const [savedMovies, setIsSavedMovies] = useState([]);
  const [savedMoviesFiltered, setSavedMoviesFiltered] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [inputText, setInputText] = useState('');
  const [errorText, setErorText] = useState('');
  const handleSearchInput = (e) => {
    setInputText(e.target.value);
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      setIsChecked(true);
    } else setIsChecked(false);
  };

  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(movie.id, localStorage.getItem('jwt'))
      .then(() => {
        const savedMoviesArray = savedMoviesFiltered
          .filter((el) => el.id !== movie.id);
        setSavedMoviesFiltered([...savedMoviesArray]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFilteredSavedMovies = () => {
    let filteredArray = savedMovies;
    filteredArray = filteredArray.filter((el) => el.nameRU.toLowerCase().includes(inputText)
      || el.nameEN.toLowerCase().includes(inputText));
    if (isChecked) {
      filteredArray = filteredArray.filter((el) => el.duration <= 40);
    }
    setSavedMoviesFiltered(filteredArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === '') {
      setErorText('Нужно ввести ключевое слово');
      return;
    }
    handleFilteredSavedMovies();
  };

  // useEffect(() => {
  //   handleFilteredSavedMovies();
  // }, [isChecked, savedMovies.length, savedMoviesFiltered.length]);

  useEffect(() => {
    mainApi
      .getSavedMovies(localStorage.getItem('jwt'))
      .then((movies) => {
        if (movies.length) {
          setIsSavedMovies([...movies]);
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
          onSubmit={handleSubmit}>
        </SearchSection>
        <CardsSection
          error={errorText}
          movieArray={savedMoviesFiltered}
          handleSaveOrDeleteMovie={handleDeleteMovie}
        >
        </CardsSection>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SavedMovies;
