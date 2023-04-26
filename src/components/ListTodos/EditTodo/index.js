import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { getStateTodo } from "../SelectedTodo/selectors";
import { editTodo } from "../todoFetch";

const EditTodo = () => {
  const selectedTodo = useSelector(getStateTodo);
  const { id, title } = selectedTodo;
  const [newValueTodo, setNewValueTodo] = useState(title);

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          value={newValueTodo}
          onChange={({ target }) => setNewValueTodo(target.value)}
        />
        <Link to="/todos">
          <Button
            variant="outline-secondary"
            onClick={() => editTodo(id, { title: newValueTodo, isDone: false })}
          >
            Edit
          </Button>
        </Link>
      </InputGroup>
    </div>
  );
};
export default EditTodo;
