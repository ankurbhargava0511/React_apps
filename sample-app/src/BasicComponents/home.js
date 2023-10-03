import { useContext } from "react";
import { MyUserContext } from "../ContextProvider/UserContext";

const Home = () => {
  const {curUser, setCurUser}= useContext(MyUserContext)
  return (
    <div>
      <p> You are in Home page. User Name :{curUser} </p>
    </div>
  );
};

export default Home;
