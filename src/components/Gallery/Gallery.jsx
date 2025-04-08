import Image from "../Image/Image";
// import "./Gallery.css"; // optional: CSS for grid

export default function Gallery({ images }) {
  return (
    <div className="image-grid">
      {images.length === 0 ? (
        <p>No images found.</p>
      ) : (
        images.map((img) => <Image key={img.id} data={img} />)
      )}
    </div>
  );
}
