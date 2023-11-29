import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  NameSpace
} from '../../const';
import { TUserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from './user.api-actions';

const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: false,
  errorMessage: null,
};


export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.errorMessage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.error = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const { requireAuthorization, setError } = userProcess.actions;
