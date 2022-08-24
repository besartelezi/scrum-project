import "./ProductItem.scss";

import { useNavigate } from 'react-router-dom';

import { FaEdit, FaTimesCircle } from "react-icons/fa";

function ProductItem({product, hoverable, rud}) {

  const id = product.id;

  const navigate = useNavigate();

  const editProduct = id => {
    navigate(`./edit-product/${id.id}`, {state:product});
  }

  const deleteProduct = id => {
    console.log(id);
  }
  
  return (
    <article className={`product${hoverable? ' product--hoverable' : ''}${rud? ' product--rud' : ''}`}>
      <img className="product__img" src={product.url} />
      <h3 className="product__name">{product.name}</h3>
      <p className="product__description">{product.shortDescription}</p>
      <button className="product__price btn--cta btn--light btn--hover-disabled"><span>{product.price}</span></button>
      {rud && 
      ( <div class="product__rud-column">
          <button className="product__edit-btn btn--no-border" onClick={() => editProduct({id})}><FaEdit /></button>
          <button className="product__delete-btn btn--no-border" onClick={() => deleteProduct({id})}><FaTimesCircle /></button>
        </div>
      )}
    </article>
  )
}

export default ProductItem