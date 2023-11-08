import { createReducer } from '@reduxjs/toolkit';
import { fullOffers } from '../mocks/fullOffers';
import { changeCity, getCityOffers } from './action';

const initialState = {
  cityName: 'Paris',
  cityOffers: fullOffers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(getCityOffers, (state, action) => {
      state.cityOffers = action.payload;
    });
});
