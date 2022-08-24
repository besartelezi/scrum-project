import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

import "./UserPage.scss";

import ProductItem from '../components/ProductItem';

function UserPage() {

    const { products, loggedInUser, userProducts, setUserProducts } = useContext(GbayContext);

    fetch("http://localhost:9000/products/byuser/" + loggedInUser.id)
        .then(res => res.json())
        .then(data => {
            console.log("producten", data);
            setUserProducts(data);
        })
        .catch(err => console.log(err));

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
                        if (product.user_id === loggedInUser.id) {
                            return (
                                <div className="user__current-listing">
                                    <ProductItem product={product} hoverable={false} rud={true} />
                                </div>
                            )
                        }
                    })}
                </section>
            </section>
        </div>
    )
}

export default UserPage