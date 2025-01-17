import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactBox}>
            <Contact data={contact} deleteContact={deleteContact} />
          </li>
        );
      })}
    </ul>
  );
}
