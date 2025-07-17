import React from 'react';
import s from './ProductItem.module.css';

const ProductItem = ({ name, picture, price, specs, qty }) => {
    return (
        <div className={s.productItem}>
             <img src={picture} alt={name} className={s.productImage} />
            <h2 className={s.productName}>{name}</h2>
            <ul className={s.productSpecs}>
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
            <div className={s.productQty}>
                <span>В наявності: {qty} шт</span>
            </div>
            <div className={s.productDetails}>
                <div className={s.productPrice}>
                    <span className="price-discounted">{price.discounted}</span>
                    {price.discounted !== price.original && (
                      <span className="price-original">{price.original}</span>
                    )}
                </div>
                <button className={s.btnBuy}>Додати до кошика</button>
            </div>
        </div>
    );
};

export default ProductItem;

            {/* <div className={s.productRating}>
                <span className={s.ratingStars}>⭐⭐⭐⭐⭐</span>
                <span className={s.ratingCount}>(100)</span>
            </div> */}