import React from 'react';
import InputSearch from '../../ui/InputSearch/InputSearch.jsx';
import InputCheckbox from '../../ui/InputCheckbox/InputCheckbox.jsx';

const SearchSection = () => (
  <section className='search'>
    <div className='search__wrap'>
      <InputSearch></InputSearch>
      <InputCheckbox></InputCheckbox>
    </div>
  </section>
);

export default SearchSection;
