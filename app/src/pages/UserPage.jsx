import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { Link } from "react-router-dom";

import "./UserPage.scss";

import ProductItem from '../components/ProductItem';
import { FaLongArrowAltRight } from 'react-icons/fa';

function UserPage() {

    const { products, loggedInUser } = useContext(GbayContext);

    return (
        <div className="container user-page">
            <h1>Your profile</h1>
            <p className="user__welcome">Welcome <b>{loggedInUser.username}</b></p>
            <h3>These are your current listings:</h3>
            <section className="products-wrapper">
                {products.map((product) => {
                    console.log(product.user_id, loggedInUser.id);
                    if (product.user_id === loggedInUser.id) {
                        return (
                            <>
                                <Link to={`/product/${product.id}`} state={product} key={crypto.randomUUID()}>
                                    <ProductItem product={product} />
                                </Link>
                            </>
                        )
                    }
                })}
            </section>
        </div>
    )
}

export default UserPage