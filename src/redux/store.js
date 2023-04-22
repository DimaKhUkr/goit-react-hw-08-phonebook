import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './AddContactsSlice';
import { filterReducer } from './filterSlice';

import { combineReducers } from 'redux';
import { authReducer } from './auth/slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: {
    state: rootReducer,
  },
});
