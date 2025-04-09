import css from "./LoadMoreBtn.module.css";
export default function LoadMore({ onClick }) {
  return (
    <div className={css.wrapper}>
      <button onClick={onClick} className={css.loadmore}>
        Load More
      </button>
    </div>
  );
}
