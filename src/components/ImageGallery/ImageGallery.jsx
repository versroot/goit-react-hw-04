import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function Gallery({ images, onImageClick }) {
  return (
    <div className={css.grid}>
      {images.map((img) => (
        <ImageCard key={img.id} data={img} onClick={() => onImageClick(img)} />
      ))}
    </div>
  );
}
