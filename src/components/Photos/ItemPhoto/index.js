import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedAblum } from '../../../store/createActions';
import style from './ItemPhoto.module.css';

const ItemPhoto = ({ info }) => {
  const dispatch = useDispatch();
  const { id, title, url, albumId } = info;
  useEffect(() => {
    dispatch(updateSelectedAblum(albumId));
  }, [dispatch, albumId]);

  return (
    <div id={id} className="p-3 ">
      <img className="w-50" src={url} alt={title} />
      <p className={style.titlePhoto}>{title}</p>
    </div>
  );
};
export default ItemPhoto;
