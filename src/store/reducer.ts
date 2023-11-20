import { createReducer } from '@reduxjs/toolkit';
import { fullOffers } from '../mocks/fullOffers';
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
  offers: fullOffers,
  error: null,
  isLoading: true
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
