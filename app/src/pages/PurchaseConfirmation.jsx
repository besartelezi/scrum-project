import {useContext, useEffect} from 'react';
import GbayContext from '../context/GbayContext';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';

import emailjs from 'emailjs-com';

function PurchaseConfirmation () {

    const {cart, setCart, loggedInUser} = useContext(GbayContext);

    //hooks
    const [emptyCart, setEmptyCart] = useState(true);

    const navigate = useNavigate();

    //users full address, it is being split up to make it look better on the site
    let originalAddress = loggedInUser.address;
    const addressArray = originalAddress.split(",");

    //delivery address data in variables
    let street = addressArray[0];
    let streetNumber = addressArray[1];
    let city = addressArray[2];
    let zipcode = addressArray[3];
    let usersFullName = loggedInUser.firstname + " " + loggedInUser.lastname

    //setting delivery date
    let today = new Date();
    let deliveryDate = new Date(today);
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    //setting delivery date into separate variables
    const day = String(deliveryDate.getDate()).padStart(2, '0');
    const month = String(deliveryDate.getMonth() + 1).padStart(2, '0');
    const year = deliveryDate.getFullYear();

    //setting delivery date into desired layout
    const deliveryDateLayout = day + "/" + month + "/" + year;

    //emails
    let usersEmail = loggedInUser.email
    let sellerUsersEmail = "xogawe6722@vasqa.com"

    //temp items
    let buyerItem = "some fun stuff" //need to get all products

    //setting email parameters
    let buyerEmailParams = {
        buyerName : usersFullName,
        buyerEmail : usersEmail,
        buyerMessage : "Congratulations, soon you will be the proud owner of: " + buyerItem,
        dateOfDelivery : deliveryDateLayout
    }

    let sellerEmailParams = {
        sellerName : "Ringo Roadagain",
        sellerEmail : sellerUsersEmail,
        sellerMessage : "Your " + buyerItem + " has just been sold!"
    }

    //calls all functions necessary for the purchase functionality
    const handlePurchaseConfirmation = () => {
        confirmationEmailBuyer();
        //like the products, find a way to send multiple mails to multiple sellers
        // confirmationEmailSeller();
        removeMultipleProducts(cart);
        confirmMessage();
        setCart([]);
        setEmptyCart(true);
        goToHomepage();
    }

    //____________________________________  Email functionality  ______________________________________

    const confirmationEmailBuyer = () => {
        emailjs.send(
            'service_bo0ty2n',
            'template_6m5b0hj',
            buyerEmailParams,
            'lYd4SaGrFHej-SfOx'
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err));
    }

    //need to add a way to select the email of the person that's selling the product
    const confirmationEmailSeller = () => {
        emailjs.send(
            'service_bo0ty2n',
            'template_nc5mlk8',
            sellerEmailParams,
            'lYd4SaGrFHej-SfOx'
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err));
    }

    //_________________________________________________________________________________________________
    
    //looping over every single product in cart
    const removeMultipleProducts = (cart) => {
        for(let i = 0; i < cart.length;i++){
            removeProduct(cart[i].id)
        }
    }

    //removing a single product from the database after purchase
    const removeProduct = async (id) => {
        const data = await fetch(`http://localhost:9000/products/${id}`,
            {method : "DELETE",
                type : "no-cors"}
        );
        const result = data.json()
        return result;
    }

    //sending the user to different pages according to what button they press
    const goToCart = () => {
        navigate('/shopping-cart')
    }

    const goToHomepage = () => {
        setTimeout(
        navigate('/'),
        3000)
    }

    //pop-up
    const confirmMessage = () => {
        window.alert("Good news everyone, your purchase has been accepted, and your cool stuff will be delivered to you with the Planet Express!");
    }

    return (
        <div className="container PurchaseConfirmation">
            <div className ="deliveryAddress">

                <h1>Delivery address:</h1>
                <p>{usersFullName}</p>
                <p>{street} {streetNumber}</p>
                <p>{city} {zipcode}</p>

            </div>

            <div className="purchasedProducts">

                <h1>Delivery moment:</h1>

                <p>{deliveryDateLayout}</p>

                {cart.map((product) =>
                    <article>
                        <p>{product.product_name}</p>
                        <p>€ {product.price/100}</p>
                    </article>
                )}

            </div>

            <div className="paymentMethod">

                <h1>Payment method:</h1>

            </div>

            <div className="buttonContainer">

                <button className="btn--cta" onClick={handlePurchaseConfirmation}>Confirm</button>
                <button className="btn--cta" onClick={goToCart}>I reject my purchase, JOJO!</button>

            </div>

        </div>
    )
}

export default PurchaseConfirmation