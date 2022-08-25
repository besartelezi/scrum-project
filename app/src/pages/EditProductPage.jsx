import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import {useLocation} from 'react-router-dom';

import { BiImageAdd } from 'react-icons/bi';

import "./EditProductPage.scss";

function EditProductPage() {

    const { categories, themes } = useContext(GbayContext);

    const location = useLocation();
    const product = location.state;

    const valueSelectedCategory = categories.find(category => category.id === product.category_id).name;
    const valueSelectedTheme = themes.find(theme => theme.id === product.theme_id).name;


    return (
        <div className="container editproduct-page">
            <h1>Edit {product.name}</h1>
            <label htmlFor="product__name">Product name:</label>
            <input type="text" placeholder="Product name" id="product__name" value={product.name}/>
            <label htmlFor="product__description--short">Short product description (max. 50 characters):</label>
            <input type="text" placeholder="Product description (short)" maxlength="50" id="product__description--short" value={product.shortDescription} />
            <label htmlFor="product__description--long">Long product description:</label>
            <textarea placeholder="Product name" maxlength="50" id="product__description--long" value={product.longDescription} />
            <label htmlFor="product__price">Product price:</label>
            <input type="text" placeholder="Product price" id="product__price" value={product.price} />
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
            <div class="product__image-wrapper">
                <img src={product.url} />
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                <BiImageAdd />
            </div>
        </div>
    )
}
export default EditProductPage