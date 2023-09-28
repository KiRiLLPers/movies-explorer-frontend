import { mainApiUrl } from './constants'

class Auth {
  constructor(mainApiUrl) {
    this._baseUrl = mainApiUrl;
    this._headers = { Accept: "application/json", "Content-type": "application/json" }
  }

  _checkStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  };

  _request(endUrl, options) {
    return fetch(`${this._baseUrl}${endUrl}`, options).then(this._checkStatus);
  }

  register(data) {
    return this._request(`${mainApiUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then((res) => this._checkStatus(res));
  }

  authorize(data) {
    return this._request(`${mainApiUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._checkStatus(res));
  }

  checkToken(token) {
    return this._request(`${mainApiUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: this._headers.Accept,
        "Content-Type": this._headers["Content-type"],
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkStatus(res));
  }
}

export const auth = new Auth(mainApiUrl)
