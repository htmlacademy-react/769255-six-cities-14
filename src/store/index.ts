import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { offerReducer, placesReducer, authReducer, errorReducer, favoriteReducer } from './reducers';
import { redirect } from '../middlewares/middleware';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    places: placesReducer,
    auth: authReducer,
    error: errorReducer,
    offer: offerReducer,
    favorite: favoriteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
