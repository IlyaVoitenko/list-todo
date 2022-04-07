import {
  UPDATE_LIST_PHOTOS,
  UPDATE_SELECTED_ALBUM,
  UPDATE_TODOS,
  GET_SELECTED_TODO,
} from '../actionTypes';

const initialState = {
  listPhotos: [],
  Todos: [],
  selectedAblum: '',
  selectedTodo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST_PHOTOS:
      return { ...state, listPhotos: [...action.payload] };
    case UPDATE_SELECTED_ALBUM:
      return { ...state, selectedAblum: action.payload };
    case UPDATE_TODOS:
      return { ...state, Todos: [...action.payload] };
    case GET_SELECTED_TODO:
      return { ...state, selectedTodo: { ...action.payload } };
    default:
      return state;
  }
};

export default reducer;
