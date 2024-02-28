import { useEffect, useState } from 'react'
import './App.css'
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

  const [filter, setFilter] = useState('');
  
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    })
  }

  const filterContacts = contacts.filter((contact) => contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    // div css.container
<div>
  <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} />
</div>

  )
}



