import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import {
  TIMEOUT_SHOW_ERROR
} from '../const';
import {
  setError
} from './actions';


export const clearErrorAction = createAsyncThunk('cities/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});
