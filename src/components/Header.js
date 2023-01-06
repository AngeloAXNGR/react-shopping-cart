import React from "react";
import { NavLink } from "react-router-dom";
import CartIcon from '../images/cart.svg'
const Header = ({showCart}) => {


  return(
    <header>
      <h1 id="header-title">eCommerce Site</h1>
      <div className="header-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
        <img onClick={showCart} id="cart-icon" src={CartIcon} alt="" />
      </div>
    </header>
  )
}

export default Header;