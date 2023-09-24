import React from 'react';

const InputMain = ({ type, label, error }) => (
  <div className='main-input'>
    <label className='label'>{label}</label>
    <input className={`main-input__input ${error ? 'main-input__input_error' : ''}`} type={type}/>
    <span className={`main-input__error-text ${error ? 'main-input__error-text_active' : ''}`}>{error}</span>
  </div>
);

export default InputMain;
