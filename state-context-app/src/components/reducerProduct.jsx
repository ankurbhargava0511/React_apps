import { ProductReducerProvider } from "../ContextProvider/ProductContextReducer";
import ProductEditReducer from "./productEditReducer";
import ProductListReducer from "./productListReducer";


const ReducerProduct = () => {
    return (
        <div>
          <ProductReducerProvider>
            <ProductListReducer />
            <hr />
            <ProductEditReducer />
          </ProductReducerProvider>
        </div>
      );
};


export default ReducerProduct