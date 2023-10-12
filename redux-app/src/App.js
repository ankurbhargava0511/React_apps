import { Fragment } from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";

import Home from "./components/home";
import ReducerProduct from "./components/reducerProduct";
import UserPage from "./components/user";
import CategoryPage from "./components/categoryPage";
import EmployeePage from "./components/employeePage";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <div>
          <Link to="/user">UserPage</Link>
          <Link to="/category">CategoryPage</Link>
          <Link to="/employee">EmployeePage</Link>
          <Link to="/product">Product</Link>
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="user" element={<UserPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="employee" element={<EmployeePage />} />
        
        <Route path="product" element={<ReducerProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
