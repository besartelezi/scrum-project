import { useContext } from 'react';
import GbayContext from '../context/GbayContext';

import "./ProductPage.scss";

function ProductPage() {

    const { products } = useContext(GbayContext);

    return (
        <div className="container">
            
        </div>
    )
}

export default ProductPage