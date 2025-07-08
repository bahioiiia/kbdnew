import React from 'react';
import s from './MenuItem.module.css'; // Assuming you have a CSS module for styling

const MenuItem = ({ id, category, qty, submenu, icon }) => {
  return (
    <li className={s.menuItem} key={id}>
      <img src={icon} alt={category} />
      {category}
      <span className={s.qty}> {qty > 0 ? qty : "-"}</span>
    </li>
  );
};

export default MenuItem;
