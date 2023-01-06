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


  return (
    <div className="app">
      <Header
        showCart={toggleCartOpen}
      />
      <Cart 
        open={openCart}
        closeCart={toggleCartOpen}
      />
      
      
      <RouteSwitch
      />
    </div>
  );
}

export default App;
