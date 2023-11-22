import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import { TOfferPreview } from '../types/offer-preview';
import { TComment } from '../types/comment';

export const changeCity = createAction<string | null>('cities/changeCity');

export const getAllOffers = createAction<TOfferPreview[]>(
  'cities/getAllOffers'
);

export const setIsLoading = createAction<boolean>('cities/setIsLoading');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setError = createAction<string | null>('cities/setError');

export const redirectToRoute = createAction<AppRoute>('cities/redirectToRoute');

export const getOffer = createAction<TOffer>('offer/getOffer');

export const setOfferIsLoadingStatus = createAction<boolean>(
  'offer/setOfferIsLoadingStatus'
);

export const setOfferId = createAction<string>('offer/setOfferId');

export const getOfferNearBy =
  createAction<TOfferPreview[]>('offer/offersNearBy');

export const getComments = createAction<TComment[]>('offer/getComments');

export const getFavoriteOffers = createAction<TOfferPreview[]>(
  'favorite/getFavoriteOffers'
);

export const setFavoriteIsLoading = createAction<boolean>('favorite/setFavoriteIsLoading');
