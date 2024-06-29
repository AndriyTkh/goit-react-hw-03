import { useState, useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem("contacts");
    if (localData !== null) {
      return JSON.parse(localData);
    } else {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
  });
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts(() => {
      return [...contacts, newContact];
    });
  };
  const deleteContact = (id) => {
    setContacts(() => {
      return contacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchValue={searchInput} setSearch={setSearchInput} />
      <ContactList
        contacts={FilterContacts(contacts, searchInput)}
        deleteContact={deleteContact}
      />
    </div>
  );
}

function FilterContacts(contacts, searchWord) {
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
  );
}
