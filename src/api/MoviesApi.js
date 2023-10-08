import { moviesApiUrl } from '../constants';
import { mainApi } from './MainApi';

class MoviesApi {
  constructor() {
    this._baseUrl = moviesApiUrl;
    this._headers = { 'Content-type': 'application/json' };
  }

  _checkStatus(res) {
    return res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  _request(endUrl, options) {
    return fetch(`${this._baseUrl}${endUrl}`, options).then(this._checkStatus);
  }

  async getMovies() {
    const movies = await this._request('/beatfilm-movies', {
      headers: this._headers,
    });
    const savedMovies = await mainApi.getSavedMovies(localStorage.getItem('jwt'));

    const savedId = savedMovies.map((el) => el.id);
    movies.forEach((el) => {
      if (savedId.includes(el.id)) {
        // eslint-disable-next-line no-param-reassign
        el.isLiked = true;
      }
    });

    return movies;
  }
}

export const moviesApi = new MoviesApi();
