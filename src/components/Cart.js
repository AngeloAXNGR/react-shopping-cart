import CartItem from "./CartItem";
const Cart = ({open, closeCart, cart, runningTotal, addQuantity, subtractQuantity}) =>{

  const styles = {
    transform: open ? 'translateX(0)' : 'translateX(100%)'
  }


  const cartItems = cart.map(product => {
    return(
      <CartItem
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        addQuantity={(id) => addQuantity(id)}
        subtractQuantity={(id) => subtractQuantity(id)}

      />
    )});

  return(
    <div style={styles}className="cart">
      <div className="cart-items">
        {cartItems}
      </div>
      
      <h1>Running Total: ${runningTotal}</h1>
      <button>Check Out</button>
      <button onClick={closeCart}>Close</button>
    </div>
  );
}

export default Cart