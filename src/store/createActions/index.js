import {
  UPDATE_LIST_PHOTOS,
  UPDATE_SELECTED_ALBUM,
  UPDATE_TODOS,
  GET_SELECTED_TODO,
} from '../actionTypes';

export function updateListPhotos(payload) {
  return { type: UPDATE_LIST_PHOTOS, payload };
}
export function updateSelectedAblum(payload) {
  return { type: UPDATE_SELECTED_ALBUM, payload };
}
export function updateTodos(payload) {
  return { type: UPDATE_TODOS, payload };
}
export function getSelectedTodo(payload) {
  return { type: GET_SELECTED_TODO, payload };
}
