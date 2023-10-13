import ProductList from "./productList";
import ProductEdit from "./productEdit";
import { ProductProvider } from "../ContextProvider/ProductContext";

const ContextProduct = () => {
  return (
    <div>
      <ProductProvider>
        <ProductList />
        <hr />
        <ProductEdit />
      </ProductProvider>
    </div>
  );
};

export default ContextProduct;
