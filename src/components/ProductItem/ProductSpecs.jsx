import s from './ProductSpecs.module.css';

const ProductSpecs = ({ specs }) => {
    return (
        <>
            {Object.entries(specs).map(([key, { value, nameUa }]) => (
                <li key={key}>
                    <strong>{nameUa}:</strong> {value}
                </li>
            ))}
        </>
    );
};

export default ProductSpecs;
