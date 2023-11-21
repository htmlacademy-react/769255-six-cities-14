import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { placesReducer } from './reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: placesReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
