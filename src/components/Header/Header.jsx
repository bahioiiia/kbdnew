import React from 'react';
import s from './Header.module.css';


const Header = () => {
  const reactLogo = '/react.svg';
  const viteLogo = '/vite.svg';

  return (
    <div className={s.header}>
      <nav>
        <img src={reactLogo} className="" alt="React logo" />
        <img src={reactLogo} className="" alt="React logo" />
        <img src={reactLogo} className="" alt="React logo" />
        <img src={reactLogo} className="" alt="React logo" />
        <img src={reactLogo} className="" alt="React logo" />
        <img src={reactLogo} className="" alt="React logo" />
      </nav>
      <div className={s.contacts}>
        <img src={viteLogo} className="" alt="Vite logo" />
        <img src={viteLogo} className="" alt="Vite logo" />
        0635262266
        <img src={viteLogo} className="" alt="Vite logo" />
      </div>
    </div>
  );
};

export default Header;