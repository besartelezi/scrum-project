import { useContext } from 'react';
import GbayContext from '../context/GbayContext';

import "./HomePage.scss";

function HomePage() {

    const { products } = useContext(GbayContext);

    return (
        <div className="container">
            <h1>Home</h1>
            <section className="products-wrapper">
                {products.map((product) => (
                    <article key={product.id} className="product">
                        <img className="product__img" src={product.url} />
                        <h3 className="product__name">{product.name}</h3>
                        <p className="product__description">{product.description}</p>
                        <p className="product__price">{product.price}</p>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default HomePage