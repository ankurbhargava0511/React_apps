import { createSlice } from "@reduxjs/toolkit";


// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "user/SET_CURRENT_USER",
// };

 const INITIAL_STATE = {
   currentUser: 'TestUser',
 };

export const userSlice =createSlice({
  name:'user',
  initialState:INITIAL_STATE,
  reducers:{
    setCurrentUser(state, action){
      state.currentUser= action.payload;
    }
  }
})

// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };

// const createAction = (type, payload) => ({ type, payload });

//  export const setCurrentUser = (user) =>
//    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);


export const {setCurrentUser} = userSlice.actions;

export const userReducer= userSlice.reducer;
export const selectCurrentUser = (state) => state.user.currentUser;
