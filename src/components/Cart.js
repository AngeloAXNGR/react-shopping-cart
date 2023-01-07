import CartItem from "./CartItem";
const Cart = ({open, closeCart, cart, runningTotal, addQuantity, subtractQuantity}) =>{
 const sidebarStyle = {
    transform: open ? 'translateX(0)' : 'translateX(100%)'
  }
 
  const fillerStyle = {
    backgroundColor: open ?  'black': 'transparent',
    pointerEvents: open ? 'auto' : 'none'
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
    <div className="cart">
      <div style={fillerStyle} onClick={closeCart} className="filler">
      </div>
      <div style={sidebarStyle}className="cart-sidebar">
        <h1>Cart Summary</h1>
        <div className="cart-items">
          {cartItems}
        </div>
      
        <h1>Total: ${runningTotal}</h1>
        <button id="checkout">Check Out</button>
        <button id="close-cart" onClick={closeCart}>Close</button>
      </div>
    </div>
  );
}

export default Cart