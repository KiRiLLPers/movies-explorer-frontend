import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SearchSection from '../../components/SearchSection/SearchSection.jsx';
import CardsSection from '../../components/CardsSection/CardsSection.jsx';
import { moviesApi } from '../../api/MoviesApi';

const Movies = () => {
  const movieArray = [
    {
      id: 1,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 2,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 3,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 4,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 5,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 6,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 7,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 8,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 9,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 10,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 11,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
    {
      id: 12,
      name: '33 слова о дизайне',
      time: '1ч 17м',
    },
  ];
  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    moviesApi.getMovies().then((data) => {
      console.log(data);
    });
  };
  return (
    <div className='body'>
      <Header></Header>
      <main className='main'>
        <SearchSection
        onSubmit={handleSearchSubmit}
        onChange={handleSearchInput}
        ></SearchSection>
        <CardsSection movieArray={movieArray} path={'/movies'}></CardsSection>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Movies;
