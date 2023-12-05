import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TError } from '../../types/state';

const initialState: TError = {
  error: null,
};

export const errorData = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setError } = errorData.actions;
