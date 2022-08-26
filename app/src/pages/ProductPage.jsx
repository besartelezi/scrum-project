import { useLocation } from 'react-router-dom';
import GbayContext from '../context/GbayContext';

import "./ProductPage.scss";
import {useContext, useEffect, useState} from "react";

function ProductPage() {
    const {cart , setCart} = useContext(GbayContext);

    const [addedToCart , setAddedToCart] = useState(false);

    const location = useLocation();
    let product = location.state.product;

    const addToCart = (product) => {

        setCart([...cart , product]);
        setAddedToCart(true);
    }


    return (
        <div className="container product-page">
            <h1>{product.product_name}</h1>
            <div>
                <img className="product__img" src="/assets/images/5.jpg" />
                <h3>{product.short_description}</h3>
                <p>{product.long_description}</p>
                <p className="product__price">&euro;{parseFloat(product.price/100).toFixed(2)}</p>
                <button onClick={()=>addToCart(product)}><span>Buy</span></button>
                {addedToCart ? (<h3>Added to cart</h3>):(<span></span>)}
            </div>
        </div>
    )
}

export default ProductPage