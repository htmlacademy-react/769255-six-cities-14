import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { TOffer } from '../../types/offer';
import { TOfferPreview } from '../../types/offer-preview';
import { AppDispatch, State, TFavoritePost } from '../../types/state';

export const fetchFavoriteOffersAction = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FAVORITE/fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<TOfferPreview[]>(APIRoute.Favorite);
  return data;
});

export const addFavoriteAction = createAsyncThunk<
  TOffer,
  TFavoritePost,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FAVORITE/postFavorite', async ({ status, id }, {dispatch, extra: api }) => {
  const { data } = await api.post<TOffer>(
    `${APIRoute.Favorite}/${id}/${status}`
  );
  if (data) {
    dispatch(fetchFavoriteOffersAction());
  }
  return data;
});
