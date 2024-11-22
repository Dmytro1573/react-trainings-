import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contacts from "../contacts.json";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const localContacts = () => {
  const savedContacts = localStorage.getItem("contacts");

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }

  return contacts;
};

export default function App() {
  const [contactsBook, setContactsBook] = useState(localContacts);
  const [filter, setFilter] = useState("");

  const handleFormSubmit = (newContact) => {
    setContactsBook((prevContacts) => {
      const contactWithId = { ...newContact, id: nanoid() };
      return [...prevContacts, contactWithId];
    });
  };

  const filteredContacts = contactsBook.filter(
    (contact) =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDeleteContact = (contactId) => {
    setContactsBook((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactsBook));
  });

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={handleFormSubmit} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
        />
      </div>
    </>
  );
}
