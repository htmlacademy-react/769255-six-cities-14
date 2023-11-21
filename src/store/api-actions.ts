import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { TOffer } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { getAllOffers, setIsLoading } from './action';

export const fetchOffers = createAsyncThunk<
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
