import React from 'react';

const InputMain = ({ type, label }) => (
  <div className='main-input-wrap'>
    <label className='label'>{label}</label>
    <input className='main-input' type={type}/>
  </div>
);

export default InputMain;
