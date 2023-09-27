import { combineReducers } from 'redux';
import { initContacts } from './constants';

const getInitialContacts = () => {
  const contactsLocal = localStorage.getItem('contacts');
  if (contactsLocal) {
    return JSON.parse(contactsLocal);
  }
  return initContacts;
};

const initialContacts = getInitialContacts();

const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

const initialFilter = '';

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case 'contacts/filteredContacts':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
