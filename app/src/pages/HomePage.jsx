import {useContext, useState , useEffect} from 'react';
import GbayContext from '../context/GbayContext';
import { Link } from "react-router-dom";

import "./HomePage.scss";

import ProductItem from '../components/ProductItem';

function HomePage() {

    const { products } = useContext(GbayContext);

    const [allProducts , setAllProducts] = useState([]);

    const fetchAllProducts = async () => {
        fetch('http://localhost:9000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data.response)
                setAllProducts(data.response);
            })
            .catch(err=> console.log(err))
    }
    useEffect(()=>{
        fetchAllProducts()
            .then(()=> console.log(allProducts))
    }, [])

    return (
        <div className="container">
            <h1>Home</h1>
            <section className="products-wrapper">
                {allProducts.map((product) => (
                    <Link to={`/product/${product.id}`} state={{product}} key={crypto.randomUUID()}>
                        <ProductItem product={product} hoverable={true} rud={false} />
                    </Link>
                ))}
            </section>
        </div>
    )
}

export default HomePage