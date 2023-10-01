import { initContacts } from './constants';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');

export const getContacts = state => {
  const { list } = state.contacts;
  return list;
};

// const getInitialContacts = () => {
//   const contactsLocal = localStorage.getItem('contacts');
//   if (contactsLocal) {
//     return JSON.parse(contactsLocal);
//   }
//   return initContacts;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.list.findIndex(
        contact => contact.id === action.payload
      );
      state.list.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
