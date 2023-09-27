import React, { useState } from 'react';
import Card from '../../ui/Card/Card.jsx';
import Preloader from '../../ui/Preloader/Preloader.jsx';

const CardsSection = ({ movieArray, path }) => {
  const [isLoading, setIsLoading] = useState(false);
  const click = () => {
    setIsLoading(true);
  };
  return (
    <div className='cards'>
      {isLoading ? <Preloader></Preloader> : <>
        <div className='cards__wrap'>
          {movieArray.map((movie) => <Card
            time={movie.time} name={movie.name} key={movie.id}
            alt={'movie-photo'}></Card>)}
        </div>
        {path === '/movies'
          && <button className="cards__more" type='button' onClick={click}>Еще</button>}
      </>}
    </div>
  );
};
export default CardsSection;
