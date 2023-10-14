import { MOVIES_API_URL } from '../constants';

class MoviesApi {
  constructor() {
    this._baseUrl = MOVIES_API_URL;
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

    return movies;
  }
}

export const moviesApi = new MoviesApi();
