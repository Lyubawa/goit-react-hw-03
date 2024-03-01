import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ name, number, id, onDelete }) {
    return (
        <div className={css.box}>
        <div>
            <p>
            <IoPerson className={css.icon} />
            {name}
            </p>
            <p> 
            <FaPhoneAlt className={css.icon} />    
            {number}
            </p>
        </div>    
            <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}
