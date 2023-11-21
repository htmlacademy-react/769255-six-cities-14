import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeCity = createAction<string | null>('cities/changeCity');

export const getAllOffers = createAction<TOffer[]>('cities/getAllOffers');

export const setIsLoading = createAction<boolean>('cities/setIsLoading');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setError = createAction<string | null>('cities/error');

export const redirectToRoute = createAction<AppRoute>('cities/redirectToRoute');
