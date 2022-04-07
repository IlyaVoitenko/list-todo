import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListTodos } from './selectors';
import { getTodos, addTodo } from './todoFetch';
import ItemTodo from './ItemTodo';

const ListTodos = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');
  const todos = useSelector(getListTodos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      <input onChange={({ target }) => setTodoTitle(target.value)}></input>
      <button onClick={() => addTodo(todoTitle)}>Add todo </button>
      {todos.map((todo) => (
        <ItemTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default ListTodos;
