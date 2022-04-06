import { updateListPhotos } from '../../store/createActions';

export function getPhotos() {
  return (dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos?`)
      .then((data) => data.json())
      .then((photos) => {
        dispatch(updateListPhotos(photos));
      });
  };
}
