const Card = ({id, image, title, price, addProduct}) =>{

  const product = {
    id:id,
    image:image,
    title:title,
    price:price,
    quantity:1
  }
  
  return(
    <div className="card">
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <p id="product-title">{title}</p>
        <div className="pricing">
          <p id="product-price">${price}</p>
          <button id="add-product" onClick={() => addProduct(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Card;