import {useContext, useEffect} from 'react';
import GbayContext from '../context/GbayContext';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';

import emailjs from 'emailjs-com';

function PurchaseConfirmation () {

    const {cart, setCart, loggedInUser} = useContext(GbayContext);

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
    let sellerEmail = "xogawe6722@vasqa.com"

    //temp items
    let buyerItem = "some fun stuff" //need to get all products

    //setting email parameters
    let buyerEmailParams = {
        buyerName : usersFullName,
        buyerEmail : usersEmail,
        buyerMessage : "A copy of " + buyerItem,
        dateOfDelivery : deliveryDateLayout
    }

    let sellerEmailParams = {

    }


    //cals all functions necessary for the purchase functionality
    const handlePurchaseConfirmation = () => {
        //first, the email functionality needs to be called
        confirmationEmailBuyer();
        confirmationEmailSeller();

        //then, the selected product needs to be removed from the list

        //lastly, the user gets a confirmation (popup?) that will send them back to the homepage
        //the confirmation must also say that they should have received an email

        // goToHomepage();
    }

    //____________________________________  Email functionality  ______________________________________

    const confirmationEmailBuyer = () => {
        emailjs.send('service_mi7r6gh',
            'template_6m5b0hj',
            buyerEmailParams,
            'lYd4SaGrFHej-SfOx'
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err));

        console.log("email has been sent");
        //an email must be sent to the buyer
        //an email must be sent to the seller
    }

    const confirmationEmailSeller = () => {

    }

    //_________________________________________________________________________________________________

    //on button click, user gets sent back to the cart
    const goToCart = () => {
        navigate('/shopping-cart')
    }

    const goToHomepage = () => {
        navigate('/');
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

                {/*<p>{cart.product.price}</p>*/}

                <p>{deliveryDateLayout}</p>

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