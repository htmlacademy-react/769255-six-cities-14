import { createReducer } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { changeCity, getAllOffers } from './action';

type TInitialState = {
  activeCity: string;
  offers: TOffer[];
  error: string | null;
  isLoading: boolean;
};

const initialState: TInitialState = {
  activeCity: 'Paris',
  offers: [],
  error: null,
  isLoading: false,
};

export const placesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      if (action.payload) {
        state.activeCity = action.payload;
      }
    })
    .addCase(getAllOffers, (state, action) => {
      if (action.payload) {
        state.offers = action.payload;
      }
    });
});
