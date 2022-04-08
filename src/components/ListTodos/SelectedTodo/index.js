import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTodo } from '../todoFetch';
import { useDispatch, useSelector } from 'react-redux';
import { getStateTodo } from './selectors';

const SelectedTodo = () => {
  const { id } = useParams();
  const dospatch = useDispatch();

  useEffect(() => {
    dospatch(getTodo(id));
  }, [id]);

  const selectedTodo = useSelector(getStateTodo);
  const { title } = selectedTodo;
  return (
    <div>
      <span>{title}</span>
      <Link to="/edit-todo">
        <button>edit</button>
      </Link>
    </div>
  );
};
export default SelectedTodo;
