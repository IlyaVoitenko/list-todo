import { updateListPhotos } from "../../../store/createActions";

export function getPhotos(idAlbum) {
  return (dispatch) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${idAlbum}`
    )
      .then((data) => data.json())
      .then((photos) => {
        dispatch(updateListPhotos(photos));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
