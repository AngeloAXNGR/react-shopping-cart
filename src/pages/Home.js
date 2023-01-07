import HeroImage from '../images/hero-image.jpg'
import { NavLink } from "react-router-dom";

const Home = () =>{
  return(
    <div className="homepage">
      <div className="hero-desc">
        <h1>RifeCart</h1>
        <p>Your One-Stop shop for Fashion, Jewelry, and Tech.</p>
        <NavLink to="products">Products</NavLink>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  )
}

export default Home;