import { useState } from 'react';
import { addTodo } from '../todoFetch';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import BtnBack from '../../BtnBack';

const CreateTodo = () => {
  const [todoTitle, setTodoTitle] = useState('');
  return (
    <div className="p-2">
      <InputGroup>
        <FormControl
          placeholder="Enter a new todo"
          className="w-25"
          onChange={({ target }) => setTodoTitle(target.value)}
        />
        <Button variant="outline-secondary" onClick={() => addTodo(todoTitle)}>
          Add todo
        </Button>
        <BtnBack />
      </InputGroup>
    </div>
  );
};
export default CreateTodo;
