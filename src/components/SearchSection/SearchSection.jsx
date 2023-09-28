import React from 'react';
import InputSearch from '../../ui/InputSearch/InputSearch.jsx';
import InputCheckbox from '../../ui/InputCheckbox/InputCheckbox.jsx';

const SearchSection = ({ onSubmit, onChange }) => (
  <section className='search'>
    <div className='search__wrap'>
      <InputSearch onSumbit={onSubmit} onChange={onChange}></InputSearch>
      <InputCheckbox></InputCheckbox>
    </div>
  </section>
);

export default SearchSection;
