import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/Main/Main.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import Movies from '../../pages/Movies/Movies.jsx';
import SavedMovies from '../../pages/SavedMovies/SavedMovies.jsx';

function App() {
  return (
  <Routes>
    <Route
      path={'/'}
      element={<Main />}
    >
    </Route>
    <Route
      path={'/movies'}
      element={<Movies />}
    >
    </Route>
    <Route
      path={'/saved-movies'}
      element={<SavedMovies />}
    >
    </Route>
    <Route
    path={'*'}
    element={<NotFound/>}
    ></Route>
  </Routes>
  );
}

export default App;
