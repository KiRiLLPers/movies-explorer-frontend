import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/Main/Main.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';

function App() {
  return (
  <Routes>
    <Route
      path={'/'}
      element={<Main />}
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
