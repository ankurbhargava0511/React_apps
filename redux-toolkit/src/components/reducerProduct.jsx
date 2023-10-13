
import ProductEditReducer from "./productEditReducer";
import ProductListReducer from "./productListReducer";


const ReducerProduct = () => {
    return (
        <div>
            <ProductListReducer />
            <hr />
           <ProductEditReducer/>
        </div>
      );
};


export default ReducerProduct