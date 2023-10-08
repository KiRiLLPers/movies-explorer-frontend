// const mainApiUrl = 'https://api.diploma.backend.nomoredomainsicu.ru/';
const mainApiUrl = 'http://localhost:3001';
const moviesApiUrl = 'https://api.nomoreparties.co';

const validationErrorText = {
  500: 'На сервере произошла ошибка, повторите попытку позже.',
  register: {
    409: 'Пользователь с таким email уже существует',
    400: 'При регистрации пользователя произошла ошибка.',
  },
  login: {
    401: 'Вы ввели неправильный логин или пароль.',
    400: 'При авторизации произошла ошибка. Введены некорректные данные.',
  },
  profile: {
    400: 'При обновлении профиля произошла ошибка.',
    409: 'Пользователь с таким email уже существует.',
  },
};

const moviesCardUpdateAfterResize = (width) => {
  if (width <= 500) {
    return { initialCount: 5, moreCount: 2 };
  } if (width <= 768) {
    return { initialCount: 8, moreCount: 2 };
  }
  return { initialCount: 12, moreCount: 3 };
};

export {
  mainApiUrl,
  moviesApiUrl,
  validationErrorText,
  moviesCardUpdateAfterResize,
};
