import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ name, number }) {
    return (
        <div className="listAddress">
        <div className="css.itemAddress">
            <p>
            <IoPerson />
            {name}
            </p>
            <p> 
            <FaPhoneAlt />    
            {number}
            </p>
        </div>    
            <button className="css.btn">Delete</button>
        </div>
    )
}

// { data: { name, number } }