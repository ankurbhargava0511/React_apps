import { useContext } from "react";
import { MyUserContext } from "../ContextProvider/UserContext";

const About = () => {
  const {curUser, setCurUser}= useContext(MyUserContext)
    return <div>This is About component. UserName: {curUser}</div>;
  };
  
  
  export default About