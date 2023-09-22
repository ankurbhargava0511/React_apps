import { Component } from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import ClassSateComponent from "./ClassComponents/ClassStateComponent";
import ClassSinglePageApplication from "./ClassComponents/ClassSinglePageApplication";
import ClassSinglePageApplicationOpt from "./ClassComponents/ClassSinglePageApplicationOpt";
import ClassSinglePageApplicationComponentWithProps from "./ClassComponentWithMultiComp/ClassSinglePageApplicationComponentWithProps";
import FunctionalComponentArrow from "./FunctionalComponentArrow";
import FunctionalSinglePageApplicationComponentWithProps from "./FunctionalComponentWithMultiComp/FunctionalSinglePageApplicationComponentWithProps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="App-title">This is the title</div>
        <div>
          <ClassComponent></ClassComponent>
          <FunctionalComponent></FunctionalComponent>

          <ClassSateComponent></ClassSateComponent>
          <ClassSinglePageApplication></ClassSinglePageApplication>
          <ClassSinglePageApplicationOpt></ClassSinglePageApplicationOpt>
          <ClassSinglePageApplicationComponentWithProps></ClassSinglePageApplicationComponentWithProps>
          <FunctionalComponentArrow></FunctionalComponentArrow>
          <FunctionalSinglePageApplicationComponentWithProps/>
        </div>
      </div>
    );
  }
}

export default App;
