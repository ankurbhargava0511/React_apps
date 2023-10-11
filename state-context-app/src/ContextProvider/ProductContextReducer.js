import {  createContext,  useReducer } from "react";

const Products = [
  { id: 1, name: "Product1", price: 2, quantity: 10 },
  { id: 2, name: "Product2", price: 4, quantity: 4 },
  { id: 3, name: "Product3", price: 7, quantity: 6 },
  { id: 4, name: "Product4", price: 8, quantity: 9 },
];

const addNewProduct = (products, productToAdd) => {
  const productAdd = products.find((p) => productToAdd.id == p.id);

  if (productAdd) {
    return products.map((product) =>
      product.id == productToAdd.id
        ? {
            id: product.id,
            name: productToAdd.name,
            price: parseInt(productToAdd.price),
            quantity:
              parseInt(productToAdd.quantity) + parseInt(product.quantity),
          }
        : product
    );
  }

  return [...products, { ...productToAdd }];
};

const remProduct = (products, productToRemove) => {
  return products.filter((product) => product.id != productToRemove.id);
};

export const ProductContextReducer = createContext({
  products: [],
});

// step 1 - intital state
const IntitalState = {
  products: Products,
  totalProducts: 0,
  totalAmount: 0,
};

// step 2- reducer
const prodReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SETProduct":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error("Error happen");
  }
};

export const ProductReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(prodReducer, IntitalState);

  const { products, totalProducts, totalAmount } = state;

  const updateProduct = (new_products) => {
    /*dispatch action with all payload */

    const productcount = new_products.reduce(
      (total, product) => total + product.quantity,
      0
    );
    const productAmount = new_products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );

    dispatch({
      type: "SETProduct",
      payload: {
        products: new_products,
        totalProducts: productcount,
        totalAmount: productAmount,
      },
    });
  };

  const addProduct = (productToAdd) => {
    const productChange = addNewProduct(products, productToAdd);
    updateProduct(productChange);
  };

  const removeProduct = (productToRemove) => {
    const productChange = remProduct(products, productToRemove);
    updateProduct(productChange);
  };

  const value = {
    products,
    totalProducts,
    totalAmount,
    addProduct,
    removeProduct,
  };

  return (
    <ProductContextReducer.Provider value={value}>
      {children}
    </ProductContextReducer.Provider>
  );
};
