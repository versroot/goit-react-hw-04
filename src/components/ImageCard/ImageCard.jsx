import css from "./ImageCard.module.css";
export default function Image({ data, onClick }) {
  const { urls, alt_description } = data;

  return (
    <div className={css.imagewrapper}>
      <img
        src={urls.small}
        alt={alt_description || "Unsplash image"} // if alt is null => "Unsplash image"
        onClick={onClick}
        className={css.image}
      />
    </div>
  );
}
