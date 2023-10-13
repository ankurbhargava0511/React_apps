//import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";

import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { categoryReducer } from "./categoryReducer";
import { employeeReducer } from "./employeeReducer";

export const rootReducer = combineReducers({
    user:userReducer,
    categories:categoryReducer,
    employees:employeeReducer,
    
    products:productReducer,

})