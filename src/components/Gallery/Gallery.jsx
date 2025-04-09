import Image from "../Image/Image";
import css from "./Gallery.module.css";

export default function Gallery({ images, onImageClick }) {
  return (
    <div className={css.grid}>
      {images.map((img) => (
        <Image key={img.id} data={img} onClick={() => onImageClick(img)} />
      ))}
    </div>
  );
}
