import React, { useState } from 'react';

const ButtonBurger = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenBurger = () => {
    setIsOpenMenu(() => !isOpenMenu);
  };

  return (
    <button
      className={`burger-menu ${isOpenMenu && 'burger-menu_open'}`}
      type='button'
      onClick={handleOpenBurger}>
    </button>
  );
};

export default ButtonBurger;
