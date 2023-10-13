import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";

// export const EMPLOYEE_ACTION_TYPES = {
//   SET_EMP: "SET_EMP",
// };

 const INITIAL_STATE = {
  allEmployee: ["XYZ", "ABC"],
 };

 export const employeeSlice =createSlice({
  name:'employee',
  initialState:INITIAL_STATE,
  reducers:{
    setEmployee(state, action){
      state.allEmployee= action.payload;
    }
  }
})

// export const employeeReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case EMPLOYEE_ACTION_TYPES.SET_EMP:
//       return { ...state, allEmployee: payload };
//     default:
//       return state;
//   }
// };

// const createAction = (type, payload) => ({ type, payload });

// export const setEmployee = ( empToadd) =>
//   createAction(EMPLOYEE_ACTION_TYPES.SET_EMP, empToadd);

export const {setEmployee} = employeeSlice.actions;

export const employeeReducer= employeeSlice.reducer;

  
const reselectEmpReducer=  (state) => state.employees;


export const selectEmployees = createSelector(
  [reselectEmpReducer],
  
  (employees)=> {
    console.log("empfire");
    return employees.allEmployee;
  }
);
