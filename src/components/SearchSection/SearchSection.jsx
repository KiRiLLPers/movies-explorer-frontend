import React from 'react';
import InputSearch from '../../ui/InputSearch/InputSearch.jsx';
import InputCheckbox from '../../ui/InputCheckbox/InputCheckbox.jsx';

const SearchSection = ({
  onSubmit, onChange, handleChecked, isChecked, value,
}) => (
  <section className='search'>
    <div className='search__wrap'>
      <InputSearch onSumbit={onSubmit} onChange={onChange} value={value}></InputSearch>
      <InputCheckbox handleChecked={handleChecked} isChecked={isChecked}></InputCheckbox>
    </div>
  </section>
);

export default SearchSection;
