import s from "./App.module.css";
import { FaAddressBook } from "react-icons/fa";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactSlice";
import { selectError, selectIsLoading } from "../../redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapp}>
      <div className={s.header}>
        <FaAddressBook className={s.icon} />
        <h1 className={s.title}>
          Phone<span className={s.span}>book</span>
        </h1>
      </div>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      {error}
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
