import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <>
      <ul className={css.bioList}>
        <li>
          <svg width="20" height="20">
            <use href="/src/symbol-defs.svg#icon-user"></use>
          </svg>
          <p>{name}</p>
        </li>
        <li>
          <svg width="20" height="20">
            <use href="/src/symbol-defs.svg#icon-phone"></use>
          </svg>
          <p>{number}</p>
        </li>
      </ul>
      <button type="button" className={css.deleteBtn}>
        Delete
      </button>
    </>
  );
}
