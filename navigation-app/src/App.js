import { Component, Fragment } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./BasicComponents/home";
import Learn from "./BasicComponents/learn";
import About from "./BasicComponents/About";
import Notes from "./BasicComponents/Notes";


import MyProduct from "./Products/MyProducts";




const Navigation = () => {
  
  return (
    <Fragment>
      <div>
        <div>
          <Link to="/">
            <h2>This is navigation. Can be a seperate components</h2>
          </Link>
        </div>
        <div>
          <Link to="/notes">Notes</Link>
          <Link to="/learn">Learn</Link>

          <Link to="/product">product</Link>
          <Link to="/about">about</Link>

          
        </div>
        <hr />
      </div>
      <Outlet />
    </Fragment>
  );
};

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="notes" element={<Notes />} />
          <Route path="learn" element={<Learn />} />

          <Route path="product/*" element={<MyProduct />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
