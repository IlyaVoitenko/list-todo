import React from "react";
import { useDispatch } from "react-redux";
import { getTodos, filterTodos } from "../todoFetch";
import { Button } from "react-bootstrap";

const FilterTodo = () => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-center">
      <h6 className="p-2">Filter todo :</h6>
      <Button
        className="mt-2 ms-2"
        variant="primary"
        onClick={() => dispatch(getTodos())}
      >
        All
      </Button>
      <Button
        className="mt-2 ms-2"
        variant="primary"
        onClick={() => {
          dispatch(filterTodos(false));
        }}
      >
        Todo
      </Button>
      <Button
        className="mt-2 ms-2"
        variant="primary"
        value="Done"
        onClick={() => dispatch(filterTodos(true))}
      >
        Done
      </Button>
    </div>
  );
};
export default FilterTodo;
