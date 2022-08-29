import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { useNavigate } from 'react-router-dom';

import '../colorscheme.scss';
import "./AddProductPage.scss";

function AddProductPage() {

    const navigate = useNavigate();

    const { categories, themes, userProducts, setUserProducts, loggedInUser } = useContext(GbayContext);

    const addProduct = () => {

        const themeValue = document.getElementById('product__theme').value;
        const categoryValue = document.getElementById('product__category').value;
        
        const imgBlob = document.getElementById('product__picture').files[0];
        
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

        const newProduct = new FormData();

        newProduct.append("product_name", document.getElementById('product__name').value);
        newProduct.append("short_description", document.getElementById('product__description--short').value);
        newProduct.append("long_description", document.getElementById("product__description--long").value,);
        newProduct.append("price", parseInt(document.getElementById("product__price").value));
        newProduct.append("amount", 1);
        newProduct.append("image_url", imgBlob);
        newProduct.append("category_id", idSelectedCategory);
        newProduct.append("theme_id", idSelectedTheme);
        newProduct.append("users_id", loggedInUser.id);
        newProduct.append("post_date", "2005-05-01");

        fetch('http://localhost:9000/products', {method: 'POST', body: newProduct, mode: 'cors'})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.message === "Product created successfully"){
                    navigate(`/user/${loggedInUser.id}`);
                };
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
                <input type="file" id="product__picture" accept="image/png, image/jpeg" />
                <button onClick={addProduct} className="btn--cta addproduct-btn">Add product</button>
           
        </div>
    )
}
export default AddProductPage