import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { Link } from "react-router-dom";

import "./HomePage.scss";

import ProductItem from '../components/ProductItem';

function HomePage() {

    const { products } = useContext(GbayContext);

    return (
        <div className="container">
            <h1>Home</h1>
            <section className="products-wrapper">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} state={product} key={crypto.randomUUID()}>
                        <ProductItem product={product} />
                    </Link>
                ))}
            </section>
        </div>
    )
}

export default HomePage