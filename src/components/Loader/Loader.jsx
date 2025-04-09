import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={css.loader}>
      <ClipLoader color="#4f46e5" size={40} />
    </div>
  );
}
