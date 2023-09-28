import { mainApiUrl } from './constants'

class MainApi {
  constructor(mainApiUrl) {
    this._baseUrl = mainApiUrl;
    this._headers = { "Content-type": "application/json" }
  }

  _checkStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(endUrl, options) {
    return fetch(`${this._baseUrl}${endUrl}`, options).then(this._checkStatus);
  }

  updateUserProfile(data) {
    return this._request(`${mainApiUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => this._checkStatus(res))
  }

  getSavedMovies() {
    return this._request(`${mainApiUrl}/movies`, {
      headers: this._headers,
    }).then(res => this._checkStatus(res))
  }

  saveMovies(movie) {
    return this._request(`${mainApiUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then(res => this._checkStatus(res))
  }

  deleteMovie(id) {
    return this._request(`${mainApiUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(res => this._checkStatus(res))
  }

}

export const mainApi = new MainApi(mainApiUrl)
