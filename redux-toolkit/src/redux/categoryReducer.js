import { createSlice } from "@reduxjs/toolkit";

// export const CATEGORY_ACTION_TYPES = {
//   SET_CATEGORY: "SET_CATEGORY",
// };

 const INITIAL_STATE = {
   allCategory: ["XYZ", "ABC"],
 };

// export const categoryReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORY_ACTION_TYPES.SET_CATEGORY:
//       return { ...state, allCategory: payload };
//     default:
//       return state;
//   }
// };

// const createAction = (type, payload) => ({ type, payload });

// export const setCategory = ( categoryToadd) =>
//   createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY, categoryToadd);
export const categorySlice =createSlice({
  name:'category',
  initialState:INITIAL_STATE,
  reducers:{
    setCategory(state, action){
      state.allCategory= action.payload;
    }
  }
})



export const {setCategory} = categorySlice.actions;

export const categoryReducer= categorySlice.reducer;


 export const selectCategories = (state) => {
   console.log("category fired")
   return   state.categories.allCategory
 };
