import { useSelector } from 'react-redux';
import ItemPhoto from '../ItemPhoto';
import { getListPhotos } from '../selectors';

const PhotosOfAlbum = () => {
  const photos = useSelector(getListPhotos);
  return photos.map((photo) => <ItemPhoto info={photo} key={photo.id} />);
};
export default PhotosOfAlbum;
