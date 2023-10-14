export function markLikedMovies(moviesObj, setMoviesData) {
  const savedMoviesFromLocalStorage = JSON.parse(localStorage.getItem('savedMovies'));
  if (savedMoviesFromLocalStorage) {
    const savedId = savedMoviesFromLocalStorage.map((el) => el.id);
    moviesObj.moviesFiltered.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.isLiked = !!savedId.includes(el.id);
    });
  }
  setMoviesData(moviesObj);
  localStorage.setItem('moviesFiltered', JSON.stringify(moviesObj));
}
