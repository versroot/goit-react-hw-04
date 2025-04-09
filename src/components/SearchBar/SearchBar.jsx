import css from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
export default function SearchBar({ onSubmit }) {
  return (
    <header className={css.topbar}>
      <form onSubmit={onSubmit} className={css.searchform}>
        <button className={css.searchbutton} type="submit">
          <BsSearch className={css.icon} />
        </button>
        <input
          className={css.searchinput}
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
