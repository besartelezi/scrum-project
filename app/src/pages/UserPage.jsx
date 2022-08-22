import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

import "./UserPage.scss";

import ProductItem from '../components/ProductItem';

function UserPage() {

    const { products, loggedInUser } = useContext(GbayContext);

    return (
        <div className="container user-page">
            <h1>Your profile</h1>
            <p className="user__welcome">Welcome <b>{loggedInUser.username}</b></p>
            <section>
                <h3>Add a new product</h3>
                <Link className="user__add-new-product" to="./add-product">
                    <IoMdAddCircleOutline />
                </Link>
            </section>
            <section>
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
            </section>
        </div>
    )
}

export default UserPage