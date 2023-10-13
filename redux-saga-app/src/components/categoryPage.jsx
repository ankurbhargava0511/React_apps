import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, selectCategories } from "../redux/categoryReducer";

const CategoryPage = () => {
  const AllCategory = useSelector(selectCategories);

  return (
    <div>
      <h1>Category Page</h1>
      <div>
        {AllCategory.map((data) => {
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
  const AllCategory = useSelector(selectCategories);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCateg = [...AllCategory, name];
    dispatch(setCategory(newCateg));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName(value);
  };

  return (
    <div>
      <h4>Add category</h4>
      <form onSubmit={() => {}}>
        <lable>category</lable>
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

export default CategoryPage;
