import { UPDATE_LIST_PHOTOS, UPDATE_SELECTED_ALBUM } from '../actionTypes';

export function updateListPhotos(payload) {
  return { type: UPDATE_LIST_PHOTOS, payload };
}
export function updateSelectedAblum(payload) {
  return { type: UPDATE_SELECTED_ALBUM, payload };
}
