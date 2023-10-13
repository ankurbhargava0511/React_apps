import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectEmployees, setEmployee } from "../redux/employeeReducer";

const EmployeePage = () => {
  const AllEmployee = useSelector(selectEmployees);

  return (
    <div>
      <h1>Employee Page</h1>
      <div>
        {AllEmployee.map((data) => {
          return <h3>{data}</h3>;
        })}
      </div>

      <hr></hr>

      <EditCategory></EditCategory>
    </div>
  );
};

const EditCategory = () => {
  const [name, setName] = useState("Test");
  const dispatch = useDispatch();
  const AllEmp = useSelector(selectEmployees);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newEmps = [...AllEmp, name];
    dispatch(setEmployee(newEmps));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName(value);
  };

  return (
    <div>
      <h4>Add Employee</h4>
      <form onSubmit={() => {}}>
        <lable>employee</lable>
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

export default EmployeePage;
