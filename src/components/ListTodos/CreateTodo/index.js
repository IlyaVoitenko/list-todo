import { useState } from 'react';
import { addTodo } from '../todoFetch';

const CreateTodo = () => {
  const [todoTitle, setTodoTitle] = useState('');
  return (
    <div>
      <input onChange={({ target }) => setTodoTitle(target.value)}></input>
      <button onClick={() => addTodo(todoTitle)}>Add todo </button>
    </div>
  );
};
export default CreateTodo;
