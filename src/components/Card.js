const Card = ({id, image, title, price}) =>{
  return(
    <div className="card">
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <p id="product-title">{title}</p>
        <p>{price}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}
export default Card;