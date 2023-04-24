import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { addContacts } from '../Fetch/addContacts';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { AddContact } from 'components/AddContact/AddContact';

export default function Tasks() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(addContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>

      <div>
        <h1>Phonebook</h1>
        <AddContact />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <b>Loading tasks...</b>}
        {error && <b>{error}</b>}

        {items.length > 0 ? (
          <ContactsList />
        ) : (
          <h3>You are absolutely alone</h3>
        )}
      </div>
    </>
  );
}
