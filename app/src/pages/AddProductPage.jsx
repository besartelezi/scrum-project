import { useContext } from 'react';
import GbayContext from '../context/GbayContext';

import "./AddProductPage.scss";

function AddProductPage() {

    const { categories, themes, userProducts, setUserProducts, loggedInUser } = useContext(GbayContext);

    const addProduct = () => {

        const themeValue = document.getElementById('product__theme').value;
        const categoryValue = document.getElementById('product__category').value;
        
        let idSelectedCategory;
        let idSelectedTheme;

        categories.forEach(category => {
            if (category.name === categoryValue) {
                idSelectedCategory = category.id;
            }
        })

        themes.forEach(theme => {
            if (theme.name === themeValue) {
                idSelectedTheme = theme.id;
            }
        })

        const newProduct = {
            product_name: document.getElementById("product__name").value,
            short_description: document.getElementById("product__description--short").value,
            long_description: document.getElementById("product__description--long").value,
            price: parseInt(document.getElementById("product__price").value),
            amount: 1,
            image: 2,
            post_date: "2022-08-23",
            category_id: idSelectedCategory,
            theme_id: idSelectedTheme,
            user_id: parseInt(loggedInUser.id)
        }

        console.log(newProduct);

        fetch('http://localhost:9000/products', {method: 'POST', body: JSON.stringify( newProduct ), mode: 'cors', headers: {'Content-Type': 'application/json'}})
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container addproduct-page">
            <h1>Add a new product</h1>
            <label htmlFor="product__name">Product name:</label>
            <input type="text" placeholder="Product name" id="product__name" />
            <label htmlFor="product__description--short">Short product description (max. 50 characters):</label>
            <input type="text" placeholder="Short product description" maxLength="50" id="product__description--short" />
            <label htmlFor="product__description--long">Long product description:</label>
            <textarea placeholder="Long product description" id="product__description--long" />
            <label htmlFor="product__price">Product price:</label>
            <input type="text" placeholder="Product price" id="product__price" />
            <label htmlFor="product__category">Product category:</label>
            <select id="product__category">
                {categories.map((category) => {
                    return (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    )
                }
                )}
            </select>
            <label htmlFor="product__theme">Product theme:</label>
            <select id="product__theme">
                {themes.map((theme) => {
                    return (
                        <option key={theme.id} value={theme.name}>{theme.name}</option>
                    )
                }
                )}
            </select>
            <label htmlFor="product__picture">Choose a product picture:</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            <button onClick={addProduct} className="addproduct-btn">Add product</button>
        </div>
    )
}
export default AddProductPage