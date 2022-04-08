import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTodo } from '../todoFetch';
import { useDispatch, useSelector } from 'react-redux';
import { getStateTodo } from './selectors';
import { Button } from 'react-bootstrap';

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
      <h5>title : {title}</h5>
      <Link to="/edit-todo">
        <Button variant="outline-secondary" className="ms-2">
          Edit
        </Button>
      </Link>
    </div>
  );
};
export default SelectedTodo;
