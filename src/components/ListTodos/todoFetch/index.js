import { updateTodos, getSelectedTodo } from "../../../store/createActions";
import axios from "axios";

export function getTodos() {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4001/todos`)
      .then((todos) => dispatch(updateTodos(todos.data)))
      .catch((err) => console.log("err :", err));
  };
}
export function filterTodos(isDone) {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4001/todos?isDone=${isDone}`)
      .then((todos) => {
        dispatch(updateTodos(todos.data));
      });
  };
}
export function addTodo(title, isDone = false) {
  return axios
    .post(`http://localhost:4001/todos`, {
      title: title,
      isDone: isDone,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response));
}

export function deleteTodo(id) {
  return axios
    .delete(`http://localhost:4001/todos/${id}`)
    .catch((err) => console.log(err));
}

export function getTodo(id) {
  return (dispatch) => {
    return axios.get(`http://localhost:4001/todos/${id}`).then((todo) => {
      console.log(todo.data);
      return dispatch(getSelectedTodo(todo.data));
    });
  };
}

export function editTodo(id, newValueTodo) {
  return axios.put(`http://localhost:4001/todos/${id}`, newValueTodo);
}
