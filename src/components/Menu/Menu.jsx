import React from 'react';
import './Menu.module.css';
import MenuItem from './MenuItem';

const Menu = ({items}) => {
  return (
    <nav className="menu">
      <ul>
        {items.map(item => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

