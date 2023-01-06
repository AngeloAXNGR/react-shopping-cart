import { NavLink } from "react-router-dom";
const Header = () => {
  return(
    <header>
      <h1 id="header-title">eCommerce Site</h1>
      <div className="header-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
      </div>
    </header>
  )
}

export default Header;