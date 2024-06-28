import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <>
      <ul className={css.bioList}>
        <li>
          O <p>{name}</p>
        </li>
        <li>
          P <p>{number}</p>
        </li>
      </ul>
      <button type="button" className={css.deleteBtn}>
        Delete
      </button>
    </>
  );
}
