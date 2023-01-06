import React from "react";
import Card from "../components/Card";

const Products = () =>{
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const parsedData = parseData(data)
      setProducts(parsedData);
    }

    getProducts();
  }, [])

  console.log(products);

  const parseData = (data) =>{
    let productsArray = [];
    for(let i = 0; i < data.length; i++){
      productsArray.push({
        id:data[i].id,
        image:data[i].image,
        title:data[i].title,
        price:data[i].price,
        isAdded:false
      })
    }
    return productsArray;
  }

  const catalog = products.map(product => {
    return(
      <Card
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
      />
    )
  })

  return(
    <div className="products">
      {catalog}
    </div>
  )
}

export default Products;