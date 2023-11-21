import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { TOffer } from '../types/offer';
import {
  changeCity,
  getAllOffers,
  requireAuthorization,
  setError,
} from './action';

type TInitialState = {
  activeCity: string;
  offers: TOffer[];
  error: string | null;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: TInitialState = {
  activeCity: 'Paris',
  offers: [],
  error: null,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      if (action.payload) {
        state.activeCity = action.payload;
      }
    })
    .addCase(getAllOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
