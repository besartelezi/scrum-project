import "./ProductItem.scss";
import {useContext, useEffect} from 'react';
import GbayContext from '../context/GbayContext';
import { useNavigate } from 'react-router-dom';

import { FaEdit, FaTimesCircle } from "react-icons/fa";

function ProductItem({product, hoverable, rud, onDelete}) {

  const {loggedInUser} = useContext(GbayContext);
  
  const id = product.id;

  const navigate = useNavigate();

  const editProduct = id => {
    navigate(`./edit-product/${id.id}`, {state: {...product}});
  }
  
  return (
    <article className={`product${hoverable? ' product--hoverable' : ''}${rud? ' product--rud' : ''}`}>

      <img className="product__img" src={product.image}/>
      <h3 className="product__name">{product.product_name}</h3>
      <p className="product__description">{product.short_description}</p>
      <p className="product__price">&euro;{parseFloat(product.price/100).toFixed(2)}</p>
      {rud && 
      ( <div class="product__rud-column">
          <button className="product__edit-btn btn--no-border" onClick={() => editProduct({id})}><FaEdit /></button>
          <button className="product__delete-btn btn--no-border" onClick={onDelete}><FaTimesCircle /></button>
        </div>
      )}
    </article>
  )
}

export default ProductItem