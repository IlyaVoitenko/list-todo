import { deleteTodo } from '../../ListTodos/todoFetch';
import { Link } from 'react-router-dom';
const ItemTodo = ({ todo }) => {
  const { title, id } = todo;
  return (
    <div>
      <Link to={`/todos/${id}`}>
        <span>{title}</span>
      </Link>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </div>
  );
};
export default ItemTodo;
