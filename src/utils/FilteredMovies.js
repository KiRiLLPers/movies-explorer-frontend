export const filteredMovies = (moviesArray, filteredMovies) => {
  console.log(moviesArray, filteredMovies);
  if (filteredMovies.moviesSearchText && filteredMovies.moviesCheckboxFiltered) {
    return filteredMovies.moviesFiltered
      .filter((el) => el.nameRU.toLowerCase().includes(filteredMovies.moviesSearchText)
        || el.nameEN.toLowerCase().includes(filteredMovies.moviesSearchText))
      .filter((el) => el.duration <= 40);
  }

  return moviesArray
    .filter((el) => el.nameRU.toLowerCase().includes(filteredMovies.moviesSearchText)
      || el.nameEN.toLowerCase().includes(filteredMovies.moviesSearchText));
};
