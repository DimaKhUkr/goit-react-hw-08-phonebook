import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { AddContact } from 'components/AddContact/AddContact';
import { fetchContacts } from 'redux/option';
import { Container, TextStyled, WrapperContacts } from './Contacts.styled';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <Container>
        {' '}
        <WrapperContacts>
          <h2>Contacts</h2>
          <Filter />
          {isLoading && <Loader />}
          {error && <b>{error}</b>}
          {items.length > 0 ? (
            <ContactsList />
          ) : (
            <TextStyled>You are absolutely alone </TextStyled>
          )}
        </WrapperContacts>
        <WrapperContacts>
          <h1>Phonebook</h1>
          <AddContact />
        </WrapperContacts>
      </Container>
    </>
  );
}
