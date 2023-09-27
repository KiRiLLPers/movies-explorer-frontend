import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SearchSection from '../../components/SearchSection/SearchSection.jsx';
import CardsSection from '../../components/CardsSection/CardsSection.jsx';

const SavedMovies = () => {
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
  ];
  return (
    <div className='body-saved'>
      <Header></Header>
      <main className='main-saved'>
        <SearchSection></SearchSection>
        <CardsSection movieArray={movieArray}></CardsSection>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SavedMovies;
