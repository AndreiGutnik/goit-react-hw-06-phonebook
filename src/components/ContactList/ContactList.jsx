import React from 'react';
import { PhonebookList } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(getContacts);
  if (!contacts.length) return <p>The Phonebook is empty!</p>;
  return (
    <PhonebookList>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </PhonebookList>
  );
}
