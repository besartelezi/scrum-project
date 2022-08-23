import { useContext } from 'react';
import GbayContext from '../context/GbayContext';

import {useLocation} from 'react-router-dom';

import "./EditProductPage.scss";

function EditProductPage() {

    const { categories, themes } = useContext(GbayContext);

    const location = useLocation();
    const product = location.state;

    return (
        <div className="container addproduct-page">
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
            <select id="product__category">
                {categories.map((category) => {

                    console.log("categoryid", category.id)
                    console.log("productcategoryid", product.category_id);

                    return (
                        <option key={category.id} value={category.name} selected={product.category_id === category.id}>{category.name}</option>
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
            <label for="product__picture">Choose a product picture:</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
        </div>
    )
}
export default EditProductPage