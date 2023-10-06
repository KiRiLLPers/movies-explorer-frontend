import { mainApiUrl } from '../constants';

class MainApi {
  constructor() {
    this._baseUrl = mainApiUrl;
  }

  _checkStatus(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  _request(endUrl, options) {
    return fetch(`${this._baseUrl}${endUrl}`, options).then(this._checkStatus);
  }

  updateUserProfile(data, token) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }

  getUserInfo(token) {
    return this._request('/users/me', {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getSavedMovies(token) {
    return this._request('/movies', {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  saveMovies(movie, token) {
    return this._request(`${mainApiUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movie),
    });
  }

  deleteMovie(id, token) {
    return this._request(`${mainApiUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const mainApi = new MainApi();
