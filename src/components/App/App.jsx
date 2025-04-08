import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

export default function App() {
  const initContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [input, setSearch] = useState(); // to handle SearchBox input  (FILTER)
  // const [contacts, setContacts] = useState(initContacts); W/O localstorage== to handle adding/deleting contacts
  const [contacts, setContacts] = useState(() => {
    const stored = localStorage.getItem("contacts");
    return stored ? JSON.parse(stored) : initContacts;
  });

  const handleSearchChange = (newVal) => {
    setSearch(newVal); // controlled component for SearchBox
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const delContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={input} onFilter={handleSearchChange} />
      <ContactList contacts={contacts} filter={input} onDelete={delContact} />
    </div>
  );
}
