import React from 'react';

const InputSearch = ({
  onSumbit, onChange, value, errorText,
}) => (
      <>
        <form className='input-search input-search__wrap' onSubmit={onSumbit}>
          <input
            className='input-search__input'
            type="text"
            placeholder='Фильмы'
            onChange={onChange}
            value={value}
          />
          <button
            className='input-search__button'
            type='submit'
          >
          </button>
        </form>
        <span className={`input-search__error ${errorText && 'input-search__error_active'}`}>Введите ключевое слово</span>
      </>
);

export default InputSearch;
