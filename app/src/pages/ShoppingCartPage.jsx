import {useContext, useEffect} from 'react';
import GbayContext from '../context/GbayContext';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import './ShoppingCartPage.scss';
import {FaTrashAlt} from 'react-icons/fa';


function ShoppingCartPage() {
    //________________load context_______________
    const {cart, setCart, loggedInUser} = useContext(GbayContext);

    const navigate = useNavigate();

    //____________________hooks__________________
    const [emptyCart, setEmptyCart] = useState(true);
    const [totalAmount , setTotalAmount] = useState(0);
    //_________________useEffect_________________
    useEffect(() => {
        if (cart.length) {
            setEmptyCart(false);
        }
        calculatePrice();
    }, [])

    useEffect(()=>{
        calculatePrice();
    },[cart])
    //_________________functions_________________
    const removeItem = (id) => {
        let filtered = cart.filter(el => {
            return el.id !== id;
        })
        if (filtered.length === 0) {
            setEmptyCart(true);
        }
        setCart(filtered);
    }

    const removeAll = () => {
        setCart([]);
        setEmptyCart(true);
    }

    const handlePayment = () => {

        //check if cart is empty
        if (emptyCart) {
            window.alert("ur cart is empty dummy")
        }
        else{
            //check if user is logged in
            if (!loggedInUser) {
                navigate('/redirect')
            }
            else {
                //replace by navigate to confirmation page
                window.alert("it worked")
            }
        }
    }


    //*******************CALCULATION FUNCTION*******************
    const calculatePrice = () => {
        let total = 0;
        cart.forEach(product => total += product.price);
        setTotalAmount(total);
    }

    //__________________________return____________________________
    return (
        <div className='container shopping-cart-page'>
            <h1>Your Cart</h1>
            <div className='cart-container'>
                {emptyCart ? (<span></span>) : (
                    <div className='cart-header cart-border'>
                        <h5 className='cart-remove-all' onClick={removeAll}>Remove all</h5>
                    </div>
                )}
                {emptyCart ? (<div className='empty-cart cart-border'><p>Your Shopping Cart Is Empty!</p></div>) :
                    (cart.map((product) =>
                            <article className='cart-item cart-border'>
                                <div className='cart-item-img'>
                                    <img src="/assets/images/5.jpg" alt=""/>
                                </div>
                                <div className='cart-item-about'>
                                    <p className='cart-item-title'>{product.product_name}</p>
                                    <p className='cart-item-subtitle'>{product.short_description}</p>
                                </div>
                                <div className='cart-item-remove-icon'><FaTrashAlt
                                    onClick={() => removeItem(product.id)}/></div>
                                <div className='cart-item-price'>&euro;{parseFloat(product.price/100).toFixed(2)}</div>
                            </article>
                        )
                    )
                }
                <div className='cart-checkout cart-border'>
                    <div className='cart-number-of-items'>{cart.length} item(s)</div>
                    <div className='cart-total-amount'>
                        &euro;{emptyCart ? (0) : (parseFloat(totalAmount/100).toFixed(2))}
                    </div>
                    <button onClick={handlePayment} className='login-btn'>Proceed to payment</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartPage;