import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';

export const changeCity = createAction<string>('main/changeCity');

export const getAllOffers = createAction<TOffer[]>(
  'main/getAllOffers'
);

export const setIsLoading = createAction<boolean>('main/setIsLoading');