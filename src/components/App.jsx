// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddContact } from './AddContact/AddContact';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
// import { fetchContacts } from 'redux/option';
import { AppBar } from './AppBar/AppBar';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
// import contacts from '../Data/contacts';

export function App() {
  // const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    state => state.state.contacts
  );

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <AppBar />
      <RegisterForm />
      <LoginForm />
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {items.length > 0 ? <ContactsList /> : <h3>You are absolutely alone</h3>}
    </div>
  );
}
