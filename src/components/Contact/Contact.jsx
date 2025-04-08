import css from "./Contact.module.css";
import { BiSolidUser, BiSolidPhone } from "react-icons/bi";

export default function Contact({ contact, onDelete }) {
  return (
    <li className={css.contact}>
      <div className={css.credentials}>
        <p className={css.name}>
          <BiSolidUser className={css.pic} />
          {contact.name}
        </p>
        <p className={css.number}>
          <BiSolidPhone className={css.pic} />
          {contact.number}
        </p>
      </div>
      <button className={css.deletebtn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
}
