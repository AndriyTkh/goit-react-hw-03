import css from "./SearchBox.module.css";

export default function SearchBox({ searchValue, setSearch }) {
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}
