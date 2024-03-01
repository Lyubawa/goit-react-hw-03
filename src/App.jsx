import { useEffect, useState } from 'react'
import './App.module.css'
import ContactsBook from './components/contact.json'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return ContactsBook;
    });
  
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  }, [contacts])

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter((contact) => contact.id !== contactId);
     });
}

  const [filter, setFilter] = useState('');

  const filterContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
  <div className={CSS.container}>
  <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
</div>

  )
}



