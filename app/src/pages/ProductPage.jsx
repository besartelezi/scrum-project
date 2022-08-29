import {useLocation} from 'react-router-dom';
import GbayContext from '../context/GbayContext';

import "./ProductPage.scss";
import {useContext, useEffect, useState} from "react";

function ProductPage() {
    const {cart, setCart, loggedInUser} = useContext(GbayContext);
    //___________Hooks__________
    const [addedToCart, setAddedToCart] = useState(false);
    const [alertTag, setAlertTag] = useState(<span></span>);
    const [categories , setCategories] = useState([]);
    const [themes , setThemes] = useState([]);
    const [productCat , setProductCat] = useState('');
    const [productTheme , setProductTheme] = useState('');

    const location = useLocation();
    let product = location.state.product;


    //_______Fetch categories and themes on load_______
    useEffect(()=>{
        fetchAllCategories();
        fetchAllThemes();
    },[])

    useEffect(()=>{
        findRightCategory();
    }, [categories])


    useEffect(()=>{
        findRightTheme();
        console.log('themes', themes);
    },[themes])

    //__________________________________Functions___________________________________
    // ____________Fetch all categories__________
    const fetchAllCategories = () => {
        fetch('http://localhost:9000/categories')
            .then(res => res.json())
            .then(data => setCategories(data.resultData))
            .catch(err=> console.log(err));
    }
    function findRightCategory() {
        let found = categories.find(({id}) => id == product.category_id);
        if (found !== undefined){
            setProductCat(found.cetagory);
        }

    }
    function fetchAllThemes() {
        fetch('http://localhost:9000/themes')
            .then(res => res.json())
            .then(data => setThemes(data.resultData))
            .catch(err => console.log(err));
    }
    function findRightTheme() {
        let found = themes.find(({id}) => id == product.theme_id);
        if (found !== undefined){
            setProductTheme(found.theme_name);
        }
    }

    const addToCart = (product) => {
        let found = cart.find(item => item.id === product.id);

        if (found === undefined) {
            //interesting fact: loggedInUser.id is of type string! so === won't work here:)
            //spent a lot of time to figure this out :)))
            if (loggedInUser !== null && loggedInUser.id == product.users_id) {
                setAlertTag(<h3>Oops! You can't buy your own product!</h3>);
            }else {
                setCart([...cart, product]);
                setAddedToCart(true);
            }

        } else {
            setAlertTag(<h3>This product is already in the cart!</h3>);
        }

    }


    return (
        <div className="container product-page">
            <h1>{product.product_name}</h1>
            <div>
                <img className="product__img" src="/assets/images/5.jpg"/>
                <h3>{product.short_description}</h3>
                <p>{product.long_description}</p>
                <p className="product__price">&euro;{parseFloat(product.price / 100).toFixed(2)}</p>
                <div className='product-page-themeAndCategory-container'>
                     <i className='product-page-themeAndCategory'>{productCat}</i>
                    <i className='product-page-themeAndCategory'>{productTheme}</i>
                </div>
                <button className='btn--cta' onClick={() => addToCart(product)}><span>Buy</span></button>
                {addedToCart ? (<h3>Added to cart!</h3>) : alertTag}
            </div>
        </div>
    )
}

export default ProductPage