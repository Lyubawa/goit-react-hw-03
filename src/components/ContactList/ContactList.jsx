import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <li className={css.item} key={contact.id}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
                onDelete={onDelete}
                />   
            </li>
          ))}  
        </ul>
     )
}