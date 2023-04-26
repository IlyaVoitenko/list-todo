import React from "react"; // Добавьте эту строку
import SearchAlbum from "./SearchAlbum";
import PhotosOfAlbum from "./PhotosOfAlbum";
const Photos = () => {
  return (
    <div>
      <SearchAlbum />
      <PhotosOfAlbum />
    </div>
  );
};
export default Photos;
