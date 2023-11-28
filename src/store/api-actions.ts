import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { store } from '.';
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  TIMEOUT_SHOW_ERROR,
} from '../const';
import { dropToken, saveToken } from '../services/token';
import { TAuthData } from '../types/auth-data';
import { TComment, TNewComment } from '../types/comment';
import { TOffer } from '../types/offer';
import { TOfferPreview } from '../types/offer-preview';
import { AppDispatch, State } from '../types/state';
import { TUserData } from '../types/user-data';
import {
  redirectToRoute,
  requireAuthorization,
  setError
} from './actions';

export const fetchOffersAction2 = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('cities/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TOfferPreview[]>(APIRoute.Offers);
  if (!data) {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }
  return data;
});

export const checkAuthAction2 = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
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
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<TUserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const clearErrorAction = createAsyncThunk('cities/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const fetchOfferAction2 = createAsyncThunk<
  TOffer,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffer', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offer.offerId;
  const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);
  return data;
});

export const fetchOffersNearByAction2 = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffersNearBy', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offer.offerId;
  const { data } = await api.get<TOfferPreview[]>(
    `${APIRoute.Offers}/${offerId}/nearBy`
  );
  return data;
});

export const fetchOfferCommentsAction2 = createAsyncThunk<
  TComment[],
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('offer/fetchOfferComments', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offer.offerId;
  const { data } = await api.get<TComment[]>(`${APIRoute.Comments}/${offerId}`);
  return data;
});

export const postCommentAction2 = createAsyncThunk<
  TComment,
  TNewComment,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offer/postComment',
  async ({ comment, rating }, { dispatch, getState, extra: api }) => {
    const state = getState();
    const offerId = state.OFFER.offer.offerId;
    const { data } = await api.post<TComment>(
      `${APIRoute.Comments}/${offerId}`,
      { comment, rating }
    );
    if (data) {
      dispatch(fetchOfferCommentsAction2());
    }
    return data;
  }
);

export const fetchFavoriteOffersAction2 = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('favorite/fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<TOfferPreview[]>(APIRoute.Favorite);
  return data;
});
