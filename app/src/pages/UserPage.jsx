import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { Link } from "react-router-dom";

import "./UserPage.scss";

function UserPage() {

    console.log('UserPage');

    const { products, users, loggedInUser } = useContext(GbayContext);
    console.log("loggedInUser", loggedInUser);

    return (
        <div className="container">
            <h1>{loggedInUser.username}</h1>
            <section className="products-wrapper">
               
            </section>
        </div>
    )
}

export default UserPage