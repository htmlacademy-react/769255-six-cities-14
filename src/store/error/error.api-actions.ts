import { createAsyncThunk } from '@reduxjs/toolkit';
import { TIMEOUT_SHOW_ERROR } from '../../const';
import { setError } from './error.slice';

export const clearErrorAction = createAsyncThunk(
  'ERROR/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  }
);
