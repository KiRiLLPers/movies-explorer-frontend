import { mainApiUrl } from '../constants';

class AuthApi {
  constructor() {
    this._baseUrl = mainApiUrl;
    this._headers = { Accept: 'application/json', 'Content-type': 'application/json' };
  }

  _checkStatus(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  _request(endUrl, options) {
    return fetch(`${this._baseUrl}${endUrl}`, options).then(this._checkStatus);
  }

  register(data) {
    return this._request('/signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  authorize(data) {
    return this._request('/signin', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  checkToken(token) {
    return this._request('/users/me', {
      method: 'GET',
      headers: {
        Accept: this._headers.Accept,
        'Content-Type': this._headers['Content-type'],
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const auth = new AuthApi();
