import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../../const';
import { TOffer } from '../../types/offer';
import { AppDispatch, State } from '../../types/state';
import { fetchFavoriteOffersAction } from '../favorite/favorite.api-actions';
import { getToken } from '../../services/token';
import { redirectToRoute } from '../actions';

export const fetchOfferAction = createAsyncThunk<
  TOffer,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('OFFER/fetchOffer', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offerId;
  const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);
  return data;
});

export const postFavoriteAction = createAsyncThunk<
  TOffer | undefined,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'OFFER/postFavorite',
  async (status: number, { getState, dispatch, extra: api }) => {
    const state = getState();
    const offerId = state.OFFER.offerId;
    const token = getToken();

    if (token !== '' && token) {
      const { data } = await api.post<TOffer>(
        `${APIRoute.Favorite}/${offerId}/${status}`
      );
      if (data) {
        dispatch(fetchFavoriteOffersAction());
        dispatch(fetchOfferAction());
      }
      return data;
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  }
);
