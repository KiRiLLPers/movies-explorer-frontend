import React from 'react';

const InputCheckbox = () => (
  <div className='input-checkbox'>
    <div className='input-checkbox__wrap'>
      <label
        className='input-checkbox__label'
        htmlFor='checkbox'
      >
        <input
          className='input-checkbox__input'
          type="checkbox"
          id='checkbox'
        />
        <div className='input-checkbox__slider'></div>
      </label>
    </div>
    <p className="input-checkbox__text">Короткометражки</p>
  </div>
);

export default InputCheckbox;
