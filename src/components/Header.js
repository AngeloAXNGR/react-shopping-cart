import React from "react";
import { NavLink } from "react-router-dom";
import CartIcon from '../images/cart.svg'
const Header = ({showCart, itemCount}) => {


  return(
    <header>
      <h1 id="header-title">RifeCart</h1>
      <div className="header-links">
        <NavLink to="/react-shopping-cart">Home</NavLink>
        <NavLink to="/react-shopping-cart/products">Products</NavLink>
        <div className="cart-icon">
          <img onClick={showCart}  src={CartIcon} alt="" />
          {itemCount !== 0 && <p>{itemCount}</p>}
        </div>
      </div>
    </header>
  )
}

export default Header;