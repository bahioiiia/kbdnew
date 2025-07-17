import React from 'react';
// import './ProductList.module.css';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

