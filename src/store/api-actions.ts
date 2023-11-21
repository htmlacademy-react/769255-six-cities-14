import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { TOffer } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { getAllOffers, requireAuthorization, setIsLoading } from './action';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('main/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setIsLoading(true));
  const { data } = await api.get<TOffer[]>(APIRoute.Offers);
  dispatch(getAllOffers(data));
  dispatch(setIsLoading(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispath: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});
