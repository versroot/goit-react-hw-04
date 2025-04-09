import css from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      toast.error("Please enter a search term.", {
        duration: 1000,
        position: "top-right",
      });
      return;
    }

    onSubmit(trimmed);
  };

  return (
    <header className={css.topbar}>
      <form onSubmit={handleSubmit} className={css.searchform}>
        <button className={css.searchbutton} type="submit">
          <BsSearch className={css.icon} />
        </button>
        <input
          className={css.searchinput}
          name="input"
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
