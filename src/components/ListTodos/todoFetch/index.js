import { updateTodos, getSelectedTodo } from '../../../store/createActions';
import axios from 'axios';

export function getTodos() {
  return (dispatch) => {
    return axios.get(`http://localhost:3001/todos`).then((todos) => {
      return dispatch(updateTodos(todos.data));
    });
  };
}
export function filterTodos(isDone) {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/todos?isDone=${isDone}`)
      .then((todos) => {
        dispatch(updateTodos(todos.data));
      });
  };
}
export function addTodo(title, isDone = false) {
  return axios.post(`http://localhost:3001/todos`, {
    title: title,
    isDone: isDone,
  });
}

export function deleteTodo(id) {
  return axios.delete(`http://localhost:3001/todos/${id}`);
}

export function getTodo(id) {
  return (dispatch) => {
    return axios.get(`http://localhost:3001/todos/${id}`).then((todo) => {
      return dispatch(getSelectedTodo(todo.data));
    });
  };
}

export function editTodo(id, newValueTodo) {
  return axios.put(`http://localhost:3001/todos/${id}`, newValueTodo);
}
