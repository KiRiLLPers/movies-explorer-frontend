import React from 'react';

const ButtonSign = ({
  title, isLoading, isValid = true, onSubmit, onClick, isNewUserData,
}) => (
    <button
      className={`button-sign ${!isValid || isNewUserData ? 'button-sign_disable' : ''}`}
      type='submit'
      disabled={isNewUserData || !isValid || isLoading}
      onClick={onSubmit || onClick}
    >
      {isLoading ? 'Подождите не много...' : title}
    </button>
);

export default ButtonSign;
