import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <div className={s.logo}>
      <img src="/keyboardLogo.svg" alt="Keyboard Logo" />
    </div>
  );
};

export default Logo;
