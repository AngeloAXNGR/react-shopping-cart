import Card from "./Card";
const Cart = ({open, closeCart, cart}) =>{

  const styles = {
    transform: open ? 'translateX(0)' : 'translateX(100%)'
  }


  const cartItems = cart.map(product => {
    return(
      <Card
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
      />
    )});

  return(
    <div style={styles}className="cart">
      <div className="cart-list">
        {cartItems}
      </div>
      
      <button>CheckOut</button>
      <button onClick={closeCart}>Close</button>
    </div>
  );
}

export default Cart