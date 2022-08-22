import "./ProductItem.scss";

function ProductItem({product, hoverable}) {

  console.log(hoverable);

  return (
    <article className={`product${hoverable? ' product--hoverable' : ''}`}>
      <img className="product__img" src={product.url} />
      <h3 className="product__name">{product.name}</h3>
      <p className="product__description">{product.shortDescription}</p>
      <p className="product__price">{product.price}</p>
    </article>
  )
}

export default ProductItem