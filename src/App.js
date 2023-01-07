import React from "react";
import RouteSwitch from "./RouteSwitch";
import Header from "./components/Header";
import Cart from "./components/Cart";


function App() {
  const [openCart, setOpenCart] = React.useState(false);


  const [cart, setCart] = React.useState(() => {return JSON.parse(localStorage.getItem('cart')) || []});
  const [runningTotal, setRunningTotal] = React.useState(0.00);
  const [cartItemCount, setCartItemCount] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  
    let total = 0;
    let count = 0;
    for(let i = 0; i < cart.length; i++){
      total += parseFloat(cart[i].quantity * cart[i].price)
      count += cart[i].quantity;
    }
    setRunningTotal(total.toFixed(2));
    setCartItemCount(count)


  },[cart])


  const toggleCartOpen = () => {
    setOpenCart(prevOpen => {return !prevOpen});
  }

  const addToCart = (product) => {
    setCart(prevCart => {
      const notAdded = prevCart.every(item =>{
        return item.id !== product.id
      })

      if(notAdded){
        return [...prevCart, product]
      }else{
        return prevCart.map(item => {
          return item.id === product.id ? {...item, quantity: item.quantity + 1} : item;
        })
      }
   
    })

  }

  const addQuantity = (id) =>{
    setCart(prevCart => {
      return prevCart.map(item =>{
        return item.id === id ? {...item, quantity: item.quantity + 1} : item;
      })
    })
  }

  const subtractQuantity = (id) =>{
    const selectedCartItem = cart.find(item => item.id === id);

    // Check if quantity of current item is less than 2
    // If it is, remove cart item after clicking subtract button again 
    if(selectedCartItem.quantity < 2){
      setCart(prevCart => {
        return prevCart.filter(item => item.id !== id);
      })
    }else{
      setCart(prevCart => {
        return prevCart.map(item =>{
          return item.id === id ? {...item, quantity: item.quantity - 1} : item;
        })
      })
    }
  }

  console.log(cart)

  return (
    <div className="app">
      <Cart 
        open={openCart}
        closeCart={toggleCartOpen}
        cart={cart}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
        runningTotal={runningTotal}
      />
      <Header
        itemCount={cartItemCount}
        showCart={toggleCartOpen}
      />

      <RouteSwitch
        addProduct={addToCart}
      />
    </div>
  );
}

export default App;
