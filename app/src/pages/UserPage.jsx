import {useContext, useEffect} from 'react';
import GbayContext from '../context/GbayContext';
import {Link} from "react-router-dom";
import {IoMdAddCircleOutline} from "react-icons/io";

import "./UserPage.scss";

import ProductItem from '../components/ProductItem';

function UserPage() {

    const {products, loggedInUser, userProducts, setUserProducts} = useContext(GbayContext);
    
    const fetchProductsByUser = () => {
        fetch("http://localhost:9000/products/byuser/" + loggedInUser.id)
            .then(res => res.json())
            .then(data => {
                console.log("product", data.resultData);
                setUserProducts(data.resultData);
            })
            .catch(err => console.log(err));
    }

    const deleteProduct = id => {
        console.log("voordefetch id is", id);
        fetch('http://localhost:9000/products/' + id, {method: 'DELETE', mode: 'cors'})
        .then(res => res.json())
        .then(data => {
            if(data.message === "product deleted successfully"){
                fetchProductsByUser();
            };
        })
        .catch(err => console.log(err));
      }

      
    useEffect(() => {
        fetchProductsByUser();
    }, [])


    return (
        <div className="container user-page">
            <h1>Your profile</h1>
            <p className="user__welcome">Welcome <b>{loggedInUser.username}</b></p>
            <section>
                <h3>Add a new product</h3>
                <Link className="user__add-new-product" to="./add-product">
                    <IoMdAddCircleOutline/>
                </Link>
            </section>
            <section>
                <h3>These are your current listings:</h3>
                <section className="products-wrapper">
                    {userProducts.map((product) =>
                            <ProductItem onDelete={() => deleteProduct(product.id)} product={product} hoverable={false} rud={true} key={crypto.randomUUID()}/>
                    )}
                </section>
            </section>
        </div>
    )
}

export default UserPage