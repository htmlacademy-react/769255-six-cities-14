import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<string | null>('main/changeCity');

export const getAllOffers = createAction<TOffer[]>('main/getAllOffers');

export const setIsLoading = createAction<boolean>('main/setIsLoading');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
