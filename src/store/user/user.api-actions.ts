import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { AppDispatch, State, TAuthData, TUserData } from '../../types/state';
import { redirectToRoute } from '../actions';

export const checkAuthAction = createAsyncThunk<
  TUserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('USER/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<TUserData>(APIRoute.Login);
  return data;
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
