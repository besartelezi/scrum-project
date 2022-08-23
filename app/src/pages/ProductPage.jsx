import { useLocation } from 'react-router-dom';

import "./ProductPage.scss";

function ProductPage() {

    const location = useLocation();
    let product = location.state.product;

    return (
        <div className="container product-page">
            <h1>{product.name}</h1>
            <div>
                <img className="product__img" src={product.url} />
                <h3>{product.shortDescription}</h3>
                <p>{product.longDescription}</p>
                <p className="product__price">{product.price}</p>
                <button><span>Buy</span></button>
            </div>
        </div>
    )
}

export default ProductPage