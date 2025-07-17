import React from 'react';
import './ProductItem.module.css';

const ProductItem = ({ name, picture, price, specs, qty }) => {
    return (
      <div className="product-card">
        <img src={picture} alt={name} className="product-image" />
  
        <div className="product-content">
          <h2 className="product-name">{name}</h2>
  
          <div className="product-price">
            <span className="price-discounted">{price.discounted}</span>
            {price.discounted !== price.original && (
              <span className="price-original">{price.original}</span>
            )}
          </div>
  
          <div className="product-specs">
            <ul>
              <li><strong>Модель:</strong> {specs.model}</li>
              <li><strong>Виробник:</strong> {specs.manufacturer}</li>
              <li><strong>Розмір:</strong> {specs.size}</li>
              <li><strong>Інтерфейс:</strong> {specs.interface}</li>
              <li><strong>Роздільна здатність:</strong> {specs.resolution}</li>
              <li><strong>Поверхня:</strong> {specs.surface_type}</li>
              <li><strong>Яскравість:</strong> {specs.brightness}</li>
              <li><strong>Тип панелі:</strong> {specs.panel_type}</li>
              <li><strong>Стан:</strong> {specs.condition}</li>
            </ul>
          </div>
  
          <div className="product-footer">
            <span className="product-qty">В наявності: {qty} шт</span>
            <button className="btn-buy">Додати до кошика</button>
          </div>
        </div>
      </div>
    );
  };

export default ProductItem;
