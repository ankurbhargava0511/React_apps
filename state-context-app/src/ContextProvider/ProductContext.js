import { useState, createContext, useEffect } from "react";

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
            quantity: parseInt(productToAdd.quantity) + parseInt(product.quantity),
          }
        : product
    );
  }

  return [...products, { ...productToAdd }];
};

const remProduct = (products, productToRemove) => {
  return products.filter((product) => product.id != productToRemove.id);
};

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(Products);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

   useEffect(()=>{
    const productcount= products.reduce((total, product)=>total+ product.quantity,0);
    setTotalProducts(productcount);
   }, [products]) 

   useEffect(()=>{
    const productAmount= products.reduce((total, product)=>total+ (product.quantity * product.price),0);
    setTotalAmount(productAmount);
   }, [products]) 

  const addProduct = (productToAdd) => {
    const pp = addNewProduct(products, productToAdd);
    console.log(pp);
    setProduct(addNewProduct(products, productToAdd));
  };

  const removeProduct = (productToRemove) => {
    setProduct(remProduct(products, productToRemove));
  };

  const value = {
    products,
    totalProducts,
    totalAmount,
    addProduct,
    removeProduct,
  };
  //console.log(products)

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
