export default function Image({ data, onClick }) {
  const { urls, alt_description } = data;

  return (
    <div className="image">
      <img
        src={urls.small}
        alt={alt_description || "Unsplash image"}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
