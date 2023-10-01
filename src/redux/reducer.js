// import { createReducer } from '@reduxjs/toolkit';
// import { initContacts } from './constants';
// import { addContact, deleteContact, filteredContacts } from './actions';

// const getInitialContacts = () => {
//   const contactsLocal = localStorage.getItem('contacts');
//   if (contactsLocal) {
//     return JSON.parse(contactsLocal);
//   }
//   return initContacts;
// };

// export const contactsReducer = createReducer(getInitialContacts(), builder => {
//   builder
//     .addCase(addContact, (state, action) => state.push(action.payload))
//     .addCase(deleteContact, (state, action) => {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     });
// });

// export const filterReducer = createReducer('', builder => {
//   builder.addCase(filteredContacts, (state, action) => action.payload);
// });
