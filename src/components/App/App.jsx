// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/Main/Main.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import Movies from '../../pages/Movies/Movies.jsx';
import SavedMovies from '../../pages/SavedMovies/SavedMovies.jsx';
import Profile from '../../pages/Profile/Profile.jsx';
import Register from '../../pages/Register/Register.jsx';
import Login from '../../pages/Login/Login.jsx';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { auth } from '../../api/AuthApi';
import ProtectedRouteElement from '../../utils/ProtectedRouteElement.jsx';
import { MoviesContext } from '../../contexts/MoviesContext';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    loggedIn: false,
  });

  const [moviesData, setMoviesData] = useState({
    moviesArray: [],
    moviesFiltered: [],
    moviesSearchText: '',
    moviesCheckboxFiltered: false,
  });

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setUserData({
              ...userData, name: res.name, email: res.email, loggedIn: true,
            });
          }
        })
        .catch((err) => {
          setUserData({ ...userData, loggedIn: false });
          localStorage.clear();
          console.error(err);
        });
    }
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    handleTokenCheck();
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      setMoviesData(movies);
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
