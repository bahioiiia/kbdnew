import React from 'react';
import s from './Menu.module.css';
import MenuItem from './MenuItem';

const Menu = ({items}) => {
  return (
    <nav className={s.menu}>
      <ul>
        {items.map(item => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

