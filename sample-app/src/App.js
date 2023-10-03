import { Component, Fragment, useContext } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./BasicComponents/home";
import Learn from "./BasicComponents/learn";
import About from "./BasicComponents/About";
import Notes from "./BasicComponents/Notes";
import FormControl from "./BasicComponents/formControl";
import UserValueProvider from "./ContextProvider/userValueProducer";
import MyProduct from "./Products/MyProducts";
import MenuItem from "./Products/menu-item";
import ProductCard from "./Products/ProductCard";
import { CartContext } from "./ContextProvider/CartContext";
import Checkout from "./Products/checkout";

const Navigation = () => {
  const {isCartOpen, setCartOpen} = useContext(CartContext)
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
          <Link to="/form">Form</Link>
          <Link to="/userValueProvider">Context Test</Link>
          <Link to="/product">product</Link>
          <Link to="/about">about</Link>
          <MenuItem />
        </div>
        {isCartOpen && <ProductCard />}
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
          <Route path="form" element={<FormControl />} />
          <Route path="userValueProvider" element={<UserValueProvider />} />
          <Route path="product" element={<MyProduct />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
