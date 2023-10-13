import './ProductsContainer.scss';

const ProductsContainer = ({ children }) => (
    <div className="container">
        <div className="ProductsContainer">{children}</div>
    </div>
);

export default ProductsContainer;
