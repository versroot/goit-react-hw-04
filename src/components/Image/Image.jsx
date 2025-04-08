export default function Image({ data }) {
  const { urls, alt_description } = data;

  return (
    <div className="image">
      <img src={urls.small} alt={alt_description} />
    </div>
  );
}
