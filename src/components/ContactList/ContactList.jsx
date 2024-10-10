import s from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { MdDelete } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      <div className={s.contCard}>
        {contacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <div className={s.contact}>
              <span className={s.name}>
                {" "}
                <IoPerson /> {contact.name}:
              </span>
              <span className={s.number}>
                {" "}
                <RiPhoneFill /> {contact.number}
              </span>
            </div>
            <button
              className={s.btn}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <MdDelete />
            </button>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default ContactList;
