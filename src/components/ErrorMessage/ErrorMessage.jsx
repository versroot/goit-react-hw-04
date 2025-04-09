export default function ErrorMessage({ message }) {
  if (message) {
    return <p className="error-message">{message}</p>;
  }

  return null;
}
