
import { useContext } from "react";
import { ProductContextReducer } from "../ContextProvider/ProductContextReducer";

const ProductListReducer=()=>{

    const { products, totalProducts, totalAmount} = useContext(ProductContextReducer);
   
    return (
      <div>
        <h1>Product</h1>
        <h4> Total Product {totalProducts}</h4>
        <h4> Total Amount {totalAmount}</h4>
        <h2> List of Product</h2>
        {products.map(product => <ProductDisplay id={product.id} name={product.name} price={product.price} quantity ={product.quantity}></ProductDisplay>)}
      </div>
    );
  
  
  }


  const ProductDisplay =product=>{
    const {id,name, price, quantity} = product;
    const {  removeProduct} = useContext(ProductContextReducer);
    const handleSubmit =  (event) => {
      event.preventDefault();
      
      removeProduct(product)
    };
    console.log(id);
    return (
      <div>
      <div key={id}>
        <span>     {id} </span>
        <span>     {name} </span>
        <span>     ${price}</span>

        <span>     { quantity}</span>
        <button onClick={handleSubmit} > Remove</button>
      </div>
     
      </div>
    );
  }


  export default ProductListReducer;