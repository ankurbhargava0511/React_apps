
import { Fragment } from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import ContextProduct from "./components/contextProduct";
import Home from "./components/home";
import ReducerProduct from "./components/reducerProduct";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <div>
          <Link to="/context">context</Link>
          <Link to="/reducer">reducer</Link>
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
        <Route path="context" element={<ContextProduct />} />
        <Route path="reducer" element={<ReducerProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
