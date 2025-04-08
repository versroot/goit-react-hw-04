import css from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <button className={css.search} type="submit">
          <BsSearch />
        </button>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
