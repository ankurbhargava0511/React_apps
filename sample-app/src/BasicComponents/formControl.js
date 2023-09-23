import { useState } from "react";

const DefaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormControl = () => {
  return (
    <div>
      <Signup></Signup>
    </div>
  );
};

const Signup = () => {
  const [formFields, setFormFields] = useState(DefaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Thank you for signup with " + displayName + email + password)
  };
  return (
    <div>
      <h1>This is a form Control Example</h1>
      <h4>If you dont have a account please sign Up</h4>
      <form onSubmit={() => {}}>
        <lable>Display Name</lable>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <lable>Email</lable>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <lable>Password</lable>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></input>

        <lable>Confirm Password</lable>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></input>
        <button type="Submit" onClick={handleSubmit}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default FormControl;
