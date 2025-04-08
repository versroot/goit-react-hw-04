import Image from "../Image/Image";
// import "./Gallery.css";

export default function Gallery({ images, onImageClick }) {
  return (
    <div className="image-grid">
      {images.map((img) => (
        <Image key={img.id} data={img} onClick={() => onImageClick(img)} />
      ))}
    </div>
  );
}
