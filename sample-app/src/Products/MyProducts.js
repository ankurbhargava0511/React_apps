import { useContext } from "react";
import { ProductContext } from "../ContextProvider/ProductContext";
import { CartContext } from "../ContextProvider/CartContext";
import { Route, Routes } from "react-router-dom";
import SubItem from "./SubItem";
import { Link } from "react-router-dom";

const MyProduct = () => {
  return (
    <Routes>
      <Route index element={<Category />} />
      <Route path=":category" element={<SubItem />} />
    </Routes>
  );
};

const Category = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      
      {products.map((item) => (
        <div>
<h2><Link  to={item.name}> {item.name} </Link></h2>
        <ProductDis key={item.id} product={item}></ProductDis>

        </div>
        
      ))}
    </div>
  );
};

const ProductDis = ({ product }) => {
  const { name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <span>{price}</span>
      </div>
      <button onClick={addProductToCart}>Add to cart</button>
    </div>
  );
};

export default MyProduct;
