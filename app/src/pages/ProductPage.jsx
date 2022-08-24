import { useLocation } from 'react-router-dom';

import "./ProductPage.scss";

function ProductPage() {

    const location = useLocation();
    let product = location.state.product;
    console.log(product);

    return (
        <div className="container product-page">
            <h1>{product.product_name}</h1>
            <div>
                <img className="product__img" src="/assets/images/5.jpg" />
                <h3>{product.short_description}</h3>
                <p>{product.long_description}</p>
                <p className="product__price">&euro;{parseFloat(product.price/100).toFixed(2)}</p>
                <button><span>Buy</span></button>
            </div>
        </div>
    )
}

export default ProductPage