import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import {useLocation, useNavigate} from 'react-router-dom';

import { BiImageAdd } from 'react-icons/bi';

import "./EditProductPage.scss";

function EditProductPage() {

    const navigate = useNavigate();

    const { categories, themes, loggedInUser } = useContext(GbayContext);

    const location = useLocation();
    const product = location.state;

    const valueSelectedCategory = categories.find(category => category.id === product.category_id).name;
    const valueSelectedTheme = themes.find(theme => theme.id === product.theme_id).name;

    const changeImage = () => {
            const imgSelected = document.getElementById("product__picture--changer").files[0];
            const reader = new FileReader();
          
            reader.onload = (event) => {
              document.querySelector(".product__image").src = event.target.result;
            }
            reader.readAsDataURL(imgSelected);
    }

    const editProduct = () => {

        const themeValue = document.getElementById('product__theme').value;
        const categoryValue = document.getElementById('product__category').value;
        
        const imgBlob = document.getElementById('product__picture--changer').files[0];
        
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

        const edittedProduct = new FormData();

        edittedProduct.append("product_name", document.getElementById('product__name').value);
        edittedProduct.append("short_description", document.getElementById('product__description--short').value);
        edittedProduct.append("long_description", document.getElementById("product__description--long").value,);
        edittedProduct.append("price", parseInt(document.getElementById("product__price").value));
        edittedProduct.append("amount", 1);
        edittedProduct.append("image_url", imgBlob);
        edittedProduct.append("category_id", idSelectedCategory);
        edittedProduct.append("theme_id", idSelectedTheme);
        edittedProduct.append("users_id", loggedInUser.id);
        edittedProduct.append("post_date", "2005-05-01");

        fetch('http://localhost:9000/products/' + product.id, {method: 'PUT', body: edittedProduct, mode: 'cors'})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.message === "product updated successfully"){
                    navigate(`/user/${loggedInUser.id}`);
                };
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container editproduct-page">
            <h1>Edit {product.product_name}</h1>
            <label htmlFor="product__name">Product name:</label>
            <input type="text" placeholder="Product name" id="product__name" defaultValue={product.product_name}/>
            <label htmlFor="product__description--short">Short product description (max. 50 characters):</label>
            <input type="text" placeholder="Product description (short)" maxlength="50" id="product__description--short" defaultValue={product.short_description} />
            <label htmlFor="product__description--long">Long product description:</label>
            <textarea placeholder="Product name" maxlength="50" id="product__description--long" defaultValue={product.long_description} />
            <label htmlFor="product__price">Product price:</label>
            <input type="text" placeholder="Product price" id="product__price" defaultValue={product.price} />
            <label htmlFor="product__category">Product category:</label>
            <select id="product__category" defaultValue={valueSelectedCategory}>
                {categories.map((category) => {

                    let selected = (category.id === product.category_id ? category.value : null);

                    return (
                        <option key={category.id} value={category.name} selected={selected}>{category.name}</option>
                    )
                }
                )}
            </select>
            <label htmlFor="product__theme">Product theme:</label>
            <select id="product__theme" defaultValue={valueSelectedTheme}>
                {themes.map((theme) => {
                    return (
                        <option key={theme.id} value={theme.name}>{theme.name}</option>
                    )
                }
                )}
            </select>
            <p>Current product image:</p>
            <div className="product__image-wrapper">
                <img className="product__image" src={product.image} />
        <input type="file" id="product__picture--changer" accept="image/png, image/jpeg" onChange={() => changeImage(this)} />
                <BiImageAdd />
            </div>
            <button onClick={editProduct} className="btn--cta btn-edit">Edit product</button>
        </div>
    )
}
export default EditProductPage