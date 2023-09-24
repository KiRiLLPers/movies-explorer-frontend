import React from 'react';

const InputSearch = () => (
    <form className='input-search input-search__wrap'>
      <input
        className='input-search__input'
        type="text"
        placeholder='Фильмы'
        required
      />
      <button
        className='input-search__button'
        type='submit'
      >
      </button>
    </form>
);

export default InputSearch;
