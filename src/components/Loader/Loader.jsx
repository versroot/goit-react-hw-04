import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
    >
      <ClipLoader color="#4f46e5" size={40} />
    </div>
  );
}
