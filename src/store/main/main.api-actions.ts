import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../../const';
import { TFavoritePost } from '../../types/state';
import { TOffer } from '../../types/offer';
import { TOfferPreview } from '../../types/offer-preview';
import { AppDispatch, State } from '../../types/state';
import { redirectToRoute } from '../actions';
import { fetchFavoriteOffersAction } from '../favorite/favorite.api-actions';
import { getToken } from '../../services/token';

export const fetchOffersAction = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('MAIN/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TOfferPreview[]>(APIRoute.Offers);
  if (!data) {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }
  return data;
});

export const addFavoriteFromMainAction = createAsyncThunk<
  TOffer | undefined,
  TFavoritePost,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('MAIN/postFavorite', async ({ status, id }, { dispatch, extra: api }) => {
  const token = getToken();

  if (token !== '' && token) {
    const { data } = await api.post<TOffer>(
      `${APIRoute.Favorite}/${id}/${status}`
    );
    if (data) {
      dispatch(fetchFavoriteOffersAction());
    }
    return data;
  } else {
    dispatch(redirectToRoute(AppRoute.Login));
  }
});
