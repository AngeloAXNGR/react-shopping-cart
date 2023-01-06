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
        <p>{price}</p>
      </div>
      <button onClick={() => addProduct(product)}>Add to Cart</button>
    </div>
  );
}
export default Card;