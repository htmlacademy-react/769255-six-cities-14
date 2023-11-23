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
  getAllOffers,
  getComments,
  getFavoriteOffers,
  getOffer,
  getOfferNearBy,
  redirectToRoute,
  requireAuthorization,
  setCommentIsLoadingStatus,
  setError,
  setFavoriteIsLoading,
  setIsLoading,
  setOfferIsLoadingStatus
} from './actions';

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
  if (!data) {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }
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

export const fetchOfferCommentsAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'offer/fetchOfferComments',
  async (_arg, { dispatch, getState, extra: api }) => {
    const state = getState();
    const offerId = state.offer.offerId;
    const { data } = await api.get<TComment[]>(
      `${APIRoute.Comments}/${offerId}`
    );
    dispatch(getComments(data));
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('favorite/fetchFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFavoriteIsLoading(true));
  const { data } = await api.get<TOfferPreview[]>(APIRoute.Favorite);
  dispatch(getFavoriteOffers(data));
  dispatch(setFavoriteIsLoading(false));
});

export const postCommentAction = createAsyncThunk<
  void,
  TNewComment,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offer/postComment',
  async ({comment, rating}, { dispatch, getState, extra: api }) => {
    const state = getState();
    const offerId = state.offer.offerId;
    dispatch(setCommentIsLoadingStatus(true));
    const {data} = await api.post<TComment>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    if(data) {
      dispatch(fetchOfferCommentsAction());
    }
    dispatch(setCommentIsLoadingStatus(false));
  }
);
