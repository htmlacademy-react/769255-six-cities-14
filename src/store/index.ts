import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { placesReducer } from './reducer';
import { createAPI } from '../services/api';

export const api = createAPI;

export const store = configureStore({ reducer: placesReducer,
middleware:  (getDefaultMiddleware) => 
getDefaultMiddleware({
    thunk: {
        extraArgument: api
    }
})});
