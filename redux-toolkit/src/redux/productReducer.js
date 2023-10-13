import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";
// export const PRODUCT_ACTION_TYPES = {
//   SET_PRODUCT: "SET_PRODUCT",
// };

const INITIAL_STATE = {
  allProduct: [
    { id: 1, name: "Product1", price: 2, quantity: 10 },
    { id: 2, name: "Product2", price: 4, quantity: 4 },
    { id: 3, name: "Product3", price: 7, quantity: 6 },
    { id: 4, name: "Product4", price: 8, quantity: 9 },
  ],
};

// actions

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




export const productSlice =createSlice({
  name:'product',
  initialState:INITIAL_STATE,
  reducers:{
    addProduct(state, action){

      state.allProduct= addNewProduct(state.allProduct, action.payload);
    },

    removeProduct(state, action){
      state.allProduct= remProduct(state.allProduct, action.payload);
    },
  }
})


// export const productReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case PRODUCT_ACTION_TYPES.SET_PRODUCT:
//       return { ...state, allProduct: payload };
//     default:
//       return state;
//   }
// };

// const createAction = (type, payload) => ({ type, payload });

// export const setProduct = ( productToadd) =>
//   createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT, productToadd);



  
const reselectProductReducer=  (state) => state.products;


export const selectProducts = createSelector(
  [reselectProductReducer],
  
  (products)=> {
    console.log("prodfire");
    return products.allProduct;
  }
);


export const selectProductTotal =createSelector(
  [selectProducts],
  (product) => {
    console.log(product)
    return product.reduce((total, product) => total + product.quantity, 0);}
);

export const selectProductAmount = createSelector(
  [selectProducts],
  (product) => {
    console.log(product)
    return product.reduce((total, product) => total + product.quantity * product.price, 0);}
    
);





export const {addProduct, removeProduct } = productSlice.actions

export const productReducer= productSlice.reducer;

// export const addProduct = (products, productToAdd) => {
//   //console.log(products);
//   //console.log(productToAdd);
//   const changedProducts = addNewProduct(products, productToAdd);
//   //console.log(changedProducts);
//   return createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT, changedProducts);
// };





// export const removeProduct = (products, productToRemove) => {
//   const changedProducts = remProduct(products, productToRemove);
//   return createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT, changedProducts);
// };












/*



// step 4 actions
/*




// step 5 Selector

/*
export const selectProductTotal = (state)=> 
  
createSelector(
  [selectProductItems],
  (productItems) => 0
    //productItems.reduce((total, product) => total + product.quantity, 0)
);

export const selectProductAmount = createSelector(
  [selectProductItems],
  (productItems) => 0
    
);


const selectProductReducer = (state) => state.products;

export const selectProductItems = createSelector(
  [selectProductReducer],
  
  (products) =>{
    console.log("productfire")
    return products.allProducts
  } 
);
*/
