export const filtered = (movies, filters) => {
  if (!movies) {
    return [];
  }
  let filteredMovies = [...movies];
  if (filters.search) {
    filteredMovies = filteredMovies
      .filter((el) => el.nameRU.toLowerCase().includes(filters.search))
      || el.nameEN.toLowerCase().includes(filters.search);
  }

  if (filters.checked) {
    filteredMovies = filteredMovies.filter((el) => el.duration <= 40);
  }

  return filteredMovies;
};
