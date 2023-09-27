import React from 'react';
import { PhonebookList } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtered = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!contacts.length) return <p>The Phonebook is empty!</p>;
  return (
    <PhonebookList>
      {filtered.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </PhonebookList>
  );
}
