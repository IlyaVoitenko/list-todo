import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStateTodo } from '../SelectedTodo/selectors';
import { editTodo } from '../todoFetch';

const EditTodo = () => {
  const selectedTodo = useSelector(getStateTodo);
  const { id, title } = selectedTodo;
  const [newValueTodo, setNewValueTodo] = useState(title);

  return (
    <div>
      <input
        value={newValueTodo}
        onChange={({ target }) => setNewValueTodo(target.value)}
      ></input>
      <Link to="/todos">
        <button
          onClick={() => editTodo(id, { title: newValueTodo, isDone: false })}
        >
          Edit
        </button>
      </Link>
    </div>
  );
};
export default EditTodo;
