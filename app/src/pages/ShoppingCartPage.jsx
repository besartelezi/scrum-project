import {useContext, useEffect} from 'react';
import GbayContext from '../context/GbayContext';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import './ShoppingCartPage.scss';
import {FaTrashAlt} from 'react-icons/fa';

function ShoppingCartPage() {
    // load context
    const {cart, setCart} = useContext(GbayContext);

    //hooks
    const [emtyCart, setEmptyCart] = useState(false);

    //useEffect
    useEffect(() => {
        if (!cart.length) {
            setEmptyCart(true);
        }
    }, [])

    //functions
    const removeItem = (id) => {
        let filtered = cart.filter(el => {
            return el.id !== id;
        })
        if (filtered.length === 0){
            setEmptyCart(true);
        }
        setCart(filtered);
        //console.log(cart);
    }

    const removeAll = () => {
        setCart([]);
        setEmptyCart(true);
    }
    //This function needs to be modified after database connection
    const calculatePrice = () => {
        let total = 0;
        cart.forEach(product => total += product.price)
        return total;
    }

    // return
    return (
        <div className='container shopping-cart-page'>
            <h1>Your Cart</h1>
            <div className='cart-container'>
                <div className='cart-header'>
                    <h5 className='cart-remove-all' onClick={removeAll}>Remove all</h5>
                </div>
                {emtyCart ? (<div className='empty-cart'><p>Your Shopping Cart Is Empty!</p></div>) :
                    (cart.map((product) =>
                            <article className='cart-item'>
                                <div className='cart-item-img'>
                                    <img src={product.url} alt=""/>
                                </div>
                                <div className='cart-item-about'>
                                    <p className='cart-item-title'>{product.name}</p>
                                    <p className='cart-item-subtitle'>{product.shortDescription}</p>
                                </div>
                                <div className='cart-item-remove-icon'><FaTrashAlt
                                    onClick={() => removeItem(product.id)}/></div>
                                <div className='cart-item-price'>{product.price}</div>
                            </article>
                        )
                    )
                }
                <hr/>
                <div className='cart-checkout'>
                    <div className='cart-total'>
                        <div className='cart-number-of-items'><span>{cart.length} item(s)</span></div>
                        <div className='cart-total-amount'>
                            {/*
                            There is a calculate function defined but can't work with it since the
                            prices are type string at this point.
                            after connection to the database the code below needs to change
                            */}
                            <span>  {emtyCart ? (0) : cart[0].price}</span>
                        </div>
                    </div>
                    <button className='login-btn'>Proceed to payment</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartPage;