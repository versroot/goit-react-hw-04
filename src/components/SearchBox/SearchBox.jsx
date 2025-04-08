import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };
  return (
    <form className={css.searchForm}>
      <label>Find contacts by name</label>
      <input
        clssName={css.searchInput}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
