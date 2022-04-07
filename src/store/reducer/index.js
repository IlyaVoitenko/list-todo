import { UPDATE_LIST_PHOTOS, UPDATE_SELECTED_ALBUM } from '../actionTypes';
const initialState = {
  listPhotos: [],
  selectedAblum: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST_PHOTOS:
      return { ...state, listPhotos: [...action.payload] };
    case UPDATE_SELECTED_ALBUM:
      return { ...state, selectedAblum: action.payload };
    default:
      return state;
  }
};

export default reducer;
