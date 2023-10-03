import { Component, Fragment } from "react";
import { Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./BasicComponents/home";
import Learn from "./BasicComponents/learn";
import About from "./BasicComponents/About";
import Notes from "./BasicComponents/Notes";
import FormControl from "./BasicComponents/formControl";
import UserValueProvider from "./ContextProvider/userValueProducer";

const Navigation = () => {
  return (
    <Fragment>
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
        <Link to="/about">about</Link>
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
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
