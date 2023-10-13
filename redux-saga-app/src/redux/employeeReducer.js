import { createSelector } from "reselect";

export const EMPLOYEE_ACTION_TYPES = {
  SET_EMP: "SET_EMP",
};

const INITIAL_STATE = {
  allEmployee: ["XYZ", "ABC"],
};

export const employeeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case EMPLOYEE_ACTION_TYPES.SET_EMP:
      return { ...state, allEmployee: payload };
    default:
      return state;
  }
};

const createAction = (type, payload) => ({ type, payload });

export const setEmployee = ( empToadd) =>
  createAction(EMPLOYEE_ACTION_TYPES.SET_EMP, empToadd);



  
const reselectEmpReducer=  (state) => state.employees;


export const selectEmployees = createSelector(
  [reselectEmpReducer],
  
  (employees)=> {
    console.log("empfire");
    return employees.allEmployee;
  }
);
