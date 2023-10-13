import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDoAsync, selectError, selectLoding, selectToDo } from "../redux/todoReducer";

const ToDoPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToDoAsync());
  }, []);

  const todos = useSelector(selectToDo);

  const error = useSelector(selectError);

  const loading = useSelector(selectLoding);
  
console.log(error);
  return (
    <div>
      {todos.map((u) => {
        return (
          <div>
            {" "}
            <span> {u.id} </span>{" "}
            <span> {u.name} </span>{" "}
            <span> {u.name} </span>{" "}
            <span> {u.email} </span>{" "}
          </div>
        );
      })}
      <h1>TO Do List</h1>

      <h3>{error}</h3>
      <h3>loding {loading?"TRUE":"FALSE" }</h3>
    </div>
  );
};

export default ToDoPage;
