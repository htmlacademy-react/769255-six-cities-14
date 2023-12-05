import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { AppDispatch, State, TAuthData, TUserData } from '../../types/state';
import { redirectToRoute } from '../actions';
import { setError } from '../error/error.slice';

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
  TUserData,
  TAuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'USER/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<TUserData>(APIRoute.Login, {
      email,
      password,
    });
    const { token } = data;
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
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
