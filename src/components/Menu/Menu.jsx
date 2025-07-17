import React from 'react';
import s from './Menu.module.css';
// import MenuItem from './MenuItem';
import MenuCheckBoxes from './MenuCheckBoxes';

const MenuItem = React.lazy(() => import('./MenuItem'));
// const filters = {
//   all: { id: 'all', label: 'All' },
//   mechanical: { id: 'mechanical', label: 'Mechanical' },
//   membrane: { id: 'membrane', label: 'Membrane' },
//   wireless: { id: 'wireless', label: 'Wireless' },
// };

const extractFilters = (products) => {
  const filters = {};

  products.forEach(({ specs }) => {
    Object.entries(specs).forEach(([key, value]) => {
      if (!filters[key]) {
        filters[key] = new Set();
      }
      filters[key].add(value);
    });
  });

  // Перетворити Set на масиви
  Object.keys(filters).forEach((key) => {
    filters[key] = Array.from(filters[key]);
  });

  return filters;
};

const Menu = ({ items, products }) => {
  const filters = extractFilters(products);
console.log('Extracted Filters:', filters);
  return (
    <nav className={s.menu}>
      <ul>
        {items.map(item => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ul>
      <MenuCheckBoxes filters={filters} />
    </nav>
  );
};

export default Menu;

