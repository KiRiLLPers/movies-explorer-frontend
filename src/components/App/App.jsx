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
import { mainApi } from '../../api/MainApi';
import { auth } from '../../api/AuthApi';
import ProtectedRouteElement from '../../utils/ProtectedRouteElement.jsx';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    loggedIn: false,
  });

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            mainApi
              .getUserInfo(token)
              .then((data) => {
                setUserData({
                  ...userData, name: data.name, email: data.email, loggedIn: true,
                });
              })
              .catch((err) => {
                setUserData({ ...userData, loggedIn: false });
                localStorage.clear();
                console.error(err);
              });
          }
        });
    }
  };

  useEffect(() => {
    handleTokenCheck();
  }, []);
  return (
    <CurrentUserContext.Provider value={{ userData, setUserData }}>
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
              element={<Register/>}
            />
            <Route
              path={'/signin'}
              element={<Login/>}
            />
            <Route
              path={'*'}
              element={<NotFound/>}
            />
        </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
