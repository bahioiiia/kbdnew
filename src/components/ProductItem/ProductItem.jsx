import React from 'react';
import s from './ProductItem.module.css';
import ProductSpecs from './ProductSpecs';

const ProductItem = ({ name, picture, price, specs, qty }) => {
    return (
        <div className={s.productItem}>
            <img src={picture} alt={name} className={s.productImage} />
            <h2 className={s.productName}>{name}</h2>
            <ul className={s.productSpecs}>
                <ProductSpecs specs={specs} />
            </ul>
            <div className={s.productQty}>
                <span>В наявності: {qty} шт</span>
            </div>
            <div className={s.productDetails}>
                <div className={s.productPrice}>
                    <span className={s.priceOriginal}>{price.original}</span>
                    <span className={s.priceDiscounted}>{price.discounted}</span>
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