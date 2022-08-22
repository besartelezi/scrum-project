import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { Link } from "react-router-dom";

import { BiImageAdd} from "react-icons/bi";

import "./AddProductPage.scss";

function AddProductPage() {

    const { categories, themes } = useContext(GbayContext);

    return (
        <div className="container addproduct-page">
            <h1>Add a new product</h1>
            <label htmlFor="product__name">Product name:</label>
            <input type="text" placeholder="Product name" id="product__name" />
            <label htmlFor="product__description--short">Short product description (max. 50 characters):</label>
            <input type="text" placeholder="Product name" maxlength="50" id="product__description--short" />
            <label htmlFor="product__description--long">Short product description (max. 50 characters):</label>
            <textarea placeholder="Product name" maxlength="50" id="product__description--long" />
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
            <label for="product__picture">Choose a profile picture:</label>

            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
        </div>
    )
}
export default AddProductPage