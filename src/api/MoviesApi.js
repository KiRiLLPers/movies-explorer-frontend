import { moviesApiUrl } from '../constants';

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

  getMovies() {
    return this._request('/beatfilm-movies', {
      headers: this._headers,
    });
  }
}

export const moviesApi = new MoviesApi();
