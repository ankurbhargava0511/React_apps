import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "../redux/userReducer";

const UserPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div>
      <h1>user Page</h1>
      <h4>{currentUser}</h4>

      <hr></hr>

      <EditUser></EditUser>
    </div>
  );
};

const EditUser = () => {
  const [name, setName] = useState("Test");
  const dispatch = useDispatch();

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setCurrentUser(name));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName(value);
  };

  return (
    <div>
      <h4>Add User</h4>
      <form onSubmit={() => {}}>
        <lable>name</lable>
        <input
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />
        <button type="Submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default UserPage;
