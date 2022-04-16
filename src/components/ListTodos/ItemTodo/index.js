import { editTodo, deleteTodo, addTodo } from '../todoFetch';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './ItemTodo.module.css';

const ItemTodo = ({ todo }) => {
  const { title, id, isDone } = todo;

  function changeChecked(title, id, isDone) {
    let result = !isDone;
    if (result) {
      deleteTodo(id);
      addTodo(title, true);
    } else {
      editTodo(id, { title: title, isDone: false });
    }
  }

  return (
    <div className="d-flex justify-content-center p-3">
      <Link to={`/todos/${id}`}>
        <h5 className={isDone ? style.todoIsDone : null}>{title}</h5>
      </Link>
      <Button
        className="ms-2 me-2"
        variant="danger"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </Button>
      <Form.Check
        type="checkbox"
        checked={isDone}
        onChange={() => changeChecked(title, id, isDone)}
      ></Form.Check>
    </div>
  );
};
export default ItemTodo;
