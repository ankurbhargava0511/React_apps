import { useContext } from "react";
import { ProductContext } from "../ContextProvider/ProductContext";
import { CartContext } from "../ContextProvider/CartContext";

const MyProduct=()=>{
    const {products}= useContext(ProductContext)
    return(
       <div>
            {products.map((item)=>(
                <ProductDis key ={item.id} product={item}></ProductDis>))}
       </div> 
    );
}

const ProductDis = ( {product} ) => {
    const { name, price } = product;
    const { addItemToCart } = useContext(CartContext);
  
    const addProductToCart = () => addItemToCart(product);
  
    return (
      <div >
        <div >
          <h1 >{name}</h1>
          <span >{price}</span>
        </div>
        <button onClick={addProductToCart}>Add to cart</button>
      </div>
    );
  };


export default MyProduct;