import { useDispatch } from 'react-redux';
import { getTodos, filterTodos } from '../todoFetch';

const FilterTodo = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>
        filter todo :<button onClick={() => dispatch(getTodos())}>All</button>
        <button
          onClick={() => {
            dispatch(filterTodos(false));
          }}
        >
          Todo
        </button>
        <button value="Done" onClick={() => dispatch(filterTodos(true))}>
          Done
        </button>
      </span>
    </div>
  );
};
export default FilterTodo;
