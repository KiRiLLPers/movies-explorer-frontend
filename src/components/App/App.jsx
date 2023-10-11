// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/Main/Main.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import SavedMovies from '../../pages/SavedMovies/SavedMovies.jsx';
import Profile from '../../pages/Profile/Profile.jsx';
import Register from '../../pages/Register/Register.jsx';
import Login from '../../pages/Login/Login.jsx';
import Movies from '../../pages/Movies/Movies.jsx';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement.jsx';
import { MoviesContext } from '../../contexts/MoviesContext';
import { mainApi } from '../../api/MainApi';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    loggedIn: !!localStorage.getItem('jwt'),
  });

  const [moviesData, setMoviesData] = useState({
    moviesFiltered: [],
    moviesSearchText: '',
    moviesCheckboxFiltered: false,
  });

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.getUserInfo(token)
        .then((user) => {
          setUserData({
            ...userData, name: user.name, email: user.email, loggedIn: true,
          });
        })
        .catch((err) => {
          setUserData({ ...userData, loggedIn: false });
          localStorage.clear();
          console.error(err);
        });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ userData, setUserData }}>
        <MoviesContext.Provider value={{ moviesData, setMoviesData }}>
          <Routes>
            <Route
              path={'/'}
              element={<Main/>}
            />
            <Route
              path={'/movies'}
              element={
                <ProtectedRouteElement
                  element={Movies}
                  loggedIn={userData.loggedIn}
                />
              }
            >
            </Route>
            <Route
              path={'/saved-movies'}
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={userData.loggedIn}
                />
              }
            />
            <Route
              path={'/profile'}
              element={
                <ProtectedRouteElement
                  element={Profile}
                  loggedIn={userData.loggedIn}
                />
              }
            />
            <Route
              path={'/signup'}
              element={
              <ProtectedRouteElement
                element={Register}
                loggedIn={!userData.loggedIn}
              />}
            />
            <Route
              path={'/signin'}
              element={
              <ProtectedRouteElement
                element={Login}
                loggedIn={!userData.loggedIn}
              />
            }
            />
            <Route
              path={'*'}
              element={<NotFound/>}
              />
          </Routes>
        </MoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
