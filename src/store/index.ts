import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { placesReducer } from './reducer';
import { redirect } from '../middlewares/middleware';

export const api = createAPI();

export const store = configureStore({
  reducer: placesReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
