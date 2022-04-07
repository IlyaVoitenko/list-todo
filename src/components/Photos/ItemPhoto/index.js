import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedAblum } from '../../../store/createActions';

const ItemPhoto = ({ info }) => {
  const dispatch = useDispatch();
  const { id, title, url, albumId } = info;
  useEffect(() => {
    dispatch(updateSelectedAblum(albumId));
  }, []);
  return (
    <div id={id}>
      <img src={url} alt={title} />
    </div>
  );
};
export default ItemPhoto;
