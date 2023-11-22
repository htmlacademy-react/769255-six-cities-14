import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  TIMEOUT_SHOW_ERROR,
} from '../const';
import { dropToken, saveToken } from '../services/token';
import { TAuthData } from '../types/auth-data';
import { TOffer } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { TUserData } from '../types/user-data';
import {
  getAllOffers,
  getComments,
  getOffer,
  getOfferNearBy,
  redirectToRoute,
  requireAuthorization,
  setError,
  setIsLoading,
  setOfferIsLoadingStatus,
} from './actions';
import { store } from '.';
import { TOfferPreview } from '../types/offer-preview';
import { TComment } from '../types/comment';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('cities/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setIsLoading(true));
  const { data } = await api.get<TOfferPreview[]>(APIRoute.Offers);
  dispatch(getAllOffers(data));
  dispatch(setIsLoading(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
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

export const fetchOfferAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffer', async (_arg, { dispatch, getState, extra: api }) => {
  dispatch(setOfferIsLoadingStatus(true));
  const state = getState();
  const offerId = state.offer.offerId;
  const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);
  dispatch(getOffer(data));
  dispatch(setOfferIsLoadingStatus(false));
});

export const fetchOffersNearByAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offer/fetchOffersNearBy',
  async (_arg, { dispatch, getState, extra: api }) => {
    const state = getState();
    const offerId = state.offer.offerId;
    const { data } = await api.get<TOfferPreview[]>(
      `${APIRoute.Offers}/${offerId}/nearBy`
    );
    dispatch(getOfferNearBy(data));
  }
);

export const fetchOfferComments = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('offer/comments', async (_arg, { dispatch, getState, extra: api }) => {
  const state = getState();
  const offerId = state.offer.offerId;
  const { data } = await api.get<TComment[]>(`${APIRoute.Comments}/${offerId}`);
  dispatch(getComments(data));
});
