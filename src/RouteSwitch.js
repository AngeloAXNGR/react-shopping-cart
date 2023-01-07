import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

const RouteSwitch = ({addProduct}) => {
  return(
    <Routes>
      <Route path="/react-shopping-cart" element={<Home/>}></Route>
      <Route path="/react-shopping-cart/products" element={
        <Products
          addProduct={(product) => addProduct(product)}
        />
      }></Route>
    </Routes>
  )
}


export default RouteSwitch;