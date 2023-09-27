import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = idContact => {
  return {
    type: 'contacts/deleteContact',
    payload: idContact,
  };
};

export const filteredContacts = query => {
  return {
    type: 'contacts/filteredContacts',
    payload: query,
  };
};
