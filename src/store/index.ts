import { configureStore } from '@reduxjs/toolkit';
import { placesReducer } from './reducer';

export const store = configureStore({ reducer: placesReducer });
