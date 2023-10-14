import React from 'react';
import InputSearch from '../../ui/InputSearch/InputSearch.jsx';
import InputCheckbox from '../../ui/InputCheckbox/InputCheckbox.jsx';

const SearchSection = ({
  onSubmit, onChange, handleChecked, isChecked, value, errorText,
}) => (
  <section className='search'>
    <div className='search__wrap'>
      <InputSearch
        onSumbit={onSubmit}
        onChange={onChange}
        value={value}
        errorText={errorText}>
      </InputSearch>
      <InputCheckbox
        handleChecked={handleChecked}
        isChecked={isChecked}>
      </InputCheckbox>
    </div>
  </section>
);

export default SearchSection;
