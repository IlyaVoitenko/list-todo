import { useDispatch, useSelector } from 'react-redux';
import { updateListPhotos } from '../../../store/createActions';
import { useState } from 'react';

const SearchAlbum = () => {
  const dispatch = useDispatch();
  const [queryOfAlbum, setQueryOfAlbum] = useState(null);
  const selectedAlbum = useSelector((state) => state.selectedAblum);
  const [isDisabled, setIsDisabled] = useState(false);
  function getPhotos(idAlbum) {
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

  return (
    <div>
      <input
        type="text"
        placeholder="enter number of ablum"
        onChange={({ target }) => {
          setIsDisabled(false);
          setQueryOfAlbum(target.value);
        }}
      ></input>
      {isDisabled ? (
        <button disabled>Get photos</button>
      ) : (
        <button
          onClick={() => {
            if (selectedAlbum.toString() === queryOfAlbum.toString()) {
              setIsDisabled(true);
            } else {
              setIsDisabled(false);
              dispatch(getPhotos(queryOfAlbum));
            }
          }}
        >
          Get photos
        </button>
      )}
    </div>
  );
};
export default SearchAlbum;
