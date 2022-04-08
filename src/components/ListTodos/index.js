import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListTodos } from './selectors';
import { getTodos } from './todoFetch';
import ItemTodo from './ItemTodo';
import FilterTodo from './FilterTodo';
import CreateTodo from './CreateTodo';

const ListTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getListTodos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <CreateTodo />
      <FilterTodo />;
      {todos.map((todo) => (
        <ItemTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default ListTodos;
