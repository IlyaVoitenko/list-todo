import React from "react";
import { useSelector } from "react-redux";
import ItemPhoto from "../ItemPhoto";
import { getListPhotos } from "../selectors";
import style from "./PhotosOfAlbum.module.css";
const PhotosOfAlbum = () => {
  const photos = useSelector(getListPhotos);
  return (
    <div className={style.containerPhotos}>
      {photos.map((photo) => (
        <ItemPhoto info={photo} key={photo.id} />
      ))}
    </div>
  );
};
export default PhotosOfAlbum;
