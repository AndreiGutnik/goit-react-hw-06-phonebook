import { combineReducers } from 'redux';
import { initContacts } from './constants';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const getInitialContacts = () => {
  const contactsLocal = localStorage.getItem('contacts');
  if (contactsLocal) {
    return JSON.parse(contactsLocal);
  }
  return initContacts;
};

const initialContacts = getInitialContacts();

function contactsReducer(state = initialContacts, action) {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state.contacts, action.payload];
    case 'contacts/deleteContact':
      return state.contacts.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}

const initialFilter = '';

function filterReducer(state = initialFilter, action) {
  switch (action.type) {
    case 'contacts/filteredContacts':
      return action.payload;
    default:
      return state;
  }
}
