export const filteredMovies = (moviesArray) => {
  let filterArray = moviesArray.moviesArray
    .filter((el) => el.nameRU.toLowerCase().includes(moviesArray.moviesSearchText)
      || el.nameEN.toLowerCase().includes(moviesArray.moviesSearchText));
  if (moviesArray.moviesCheckboxFiltered) {
    filterArray = filterArray.filter((el) => el.duration <= 40);
  }

  return filterArray;
};
