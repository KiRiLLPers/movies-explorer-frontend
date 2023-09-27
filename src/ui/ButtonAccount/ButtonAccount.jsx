import React from 'react';
import { Link } from 'react-router-dom';

const ButtonAccount = () => (
  <button className='button-account'><Link className='account-link' to='/profile'>Аккаунт</Link></button>
);

export default ButtonAccount;
