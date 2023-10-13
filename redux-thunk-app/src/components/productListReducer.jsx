
import {  useDispatch,useSelector } from "react-redux";
import { removeProduct } from "../redux/productReducer";
import {  } from "react-redux";
import { selectProducts, selectProductTotal, selectProductAmount } from "../redux/productReducer";

const ProductListReducer=()=>{


    const  products = useSelector( selectProducts);
    const total =useSelector( selectProductTotal);
    const amount =useSelector( selectProductAmount);
    
    return (
      
      <div>
        <h1>Product</h1>
        <h4> Total Product {total}</h4>
        <h4> Total Amount {amount}</h4>
        <h2> List of Product</h2>
        <div>
        {products.map((data) => {
          return <ProductDisplay id= {data.id} name={data.name} price={data.price} quantity={data.quantity}></ProductDisplay>;
        })}
      </div>
      </div>
    );
  
  
  }


  const ProductDisplay =product=>{

    const  products = useSelector(selectProducts);
    const {id,name, price, quantity} = product;
    const dispatch= useDispatch()
    //const removeItem = 
    const handleSubmit =  (event) => {
      event.preventDefault();
      
      dispatch(removeProduct(products,product));
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