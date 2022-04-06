import { UPDATE_LIST_PHOTOS } from '../actionTypes';
const initialState = {
  listPhtos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST_PHOTOS:
      return { ...state, listPhtos: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
