const Cart = ({open, closeCart}) =>{

  const styles = {
    transform: open ? 'translateX(0)' : 'translateX(100%)'
  }
  return(
    <div style={styles}className="cart">
      <button>CheckOut</button>
      <button onClick={closeCart}>Close</button>
    </div>
  );
}

export default Cart