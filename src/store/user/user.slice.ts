import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, AuthorizationStatus, NameSpace, TIMEOUT_SHOW_ERROR } from '../../const';
import { AppDispatch, State, TUserProcess } from '../../types/state';
import { AxiosInstance } from 'axios';
import { saveToken, dropToken } from '../../services/token';
import { TAuthData } from '../../types/auth-data';
import { TUserData } from '../../types/user-data';
import { redirectToRoute } from '../actions';

const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: false,
  errorMessage: null,
};

export const clearErrorAction = createAsyncThunk(
  'USER/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('USER/checkAuth', async (_arg, { extra: api }) => {
  await api.get(APIRoute.Login);
});

export const loginAction = createAsyncThunk<
  void,
  TAuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'USER/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<TUserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('USER/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});


export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      state.errorMessage = action.payload;
    }
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

export const { setError } = userProcess.actions;
