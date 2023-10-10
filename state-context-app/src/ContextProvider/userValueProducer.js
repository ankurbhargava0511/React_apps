import { useState, useContext} from "react";
import { MyUserContext } from "./UserContext";


const UserValueProvider = () => {

    const [user, setUser] = useState("MyUser");
    const {setCurUser}= useContext(MyUserContext)
    const handleSubmit = async (event) => {
      event.preventDefault();
      setCurUser(user)
    };
  
    return (
      <div>
        <form onSubmit={() => {}}>
          <lable>User Name</lable>
          <input
            type="text"
            required
            onChange={(event) => {
              let uValue = event.target.value;
              setUser(uValue);
            }}
            name="user"
            value={user}
          />
  
          <button type="Submit" onClick={handleSubmit}>
            SignUp
          </button>
        </form>
      </div>
    );
  };
  
export default UserValueProvider ;



