import React from 'react';
import addIcon from '../images/plus.svg';
import subtractIcon from '../images/minus.svg';

const CartItem = ({id, image, title, price, quantity, subtractQuantity, addQuantity}) =>{
  const [total, setTotal] = React.useState((price * quantity));

  React.useEffect(() => {
    setTotal((price * quantity).toFixed(2));
  },[quantity])

  

  return(
    <div className="cart-item">
      <div className="item-left-section">
        <img src={image} alt="" />
      </div>
      <div className="item-right-section">
        <p className="cart-item-title">{title}</p>
        <p>${total}</p>

        <div className="quantity">
          <img id="subtract" src={subtractIcon} alt="" onClick={() => subtractQuantity(id)}/>
          <p>{quantity}</p>
          <img id="add" src={addIcon} alt="" onClick={() => addQuantity(id)}/>
        </div>
      </div>
    </div>
  )
}
export default CartItem