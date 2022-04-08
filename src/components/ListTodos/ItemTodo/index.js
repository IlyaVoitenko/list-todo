import { addTodo, editTodo, deleteTodo } from '../todoFetch';
import { Link } from 'react-router-dom';

const ItemTodo = ({ todo }) => {
  const { title, id, isDone } = todo;

  function changeChecked(title, id, isDone) {
    let result = !isDone;
    if (!result) {
      return editTodo(id, { title: title, isDone: result });
    } else {
      addTodo(title, true);
      return deleteTodo(id);
    }
  }

  return (
    <div>
      <Link to={`/todos/${id}`}>
        <span className={isDone ? '' : null}>{title}</span>
      </Link>
      <button onClick={() => deleteTodo(id)}>delete</button>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => changeChecked(title, id, isDone)}
      ></input>
    </div>
  );
};
export default ItemTodo;
