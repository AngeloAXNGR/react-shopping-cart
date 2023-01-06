import { Routes, Route } from "react-router-dom";
import React from "react";
import RouteSwitch from "./RouteSwitch";
import Header from "./components/Header";
import Cart from "./components/Cart";


function App() {
  const [openCart, setOpenCart] = React.useState(false);


  const [cart, setCart] = React.useState([]);

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

  console.log(cart)

  return (
    <div className="app">
      <Cart 
        open={openCart}
        closeCart={toggleCartOpen}
        cart={cart}
      />
      <Header
        showCart={toggleCartOpen}
      />

      <RouteSwitch
        addProduct={addToCart}
      />
    </div>
  );
}

export default App;
