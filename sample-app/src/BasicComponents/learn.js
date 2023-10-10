import ClassComponent from "../classComponents";
import ClassSinglePageApplicationComponentWithProps from "../ClassComponentWithMultiComp/ClassSinglePageApplicationComponentWithProps";
import ClassSinglePageApplication from "../ClassComponents/ClassSinglePageApplication";
import ClassSinglePageApplicationOpt from "../ClassComponents/ClassSinglePageApplicationOpt";
import ClassSateComponent from "../ClassComponents/ClassStateComponent";
import FunctionalComponent from "../FunctionalComponent";
import FunctionalComponentArrow from "../FunctionalComponentArrow";
import FunctionalSinglePageApplicationComponentWithProps from "../FunctionalComponentWithMultiComp/FunctionalSinglePageApplicationComponentWithProps";

const Learn = () => {
  return (
    <div>
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
          <FunctionalSinglePageApplicationComponentWithProps />
        </div>
      </div>
    </div>
  );
};

export default Learn;
