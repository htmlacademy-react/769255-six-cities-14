import { createReducer } from '@reduxjs/toolkit';
import { fullOffers } from '../mocks/fullOffers';
import { changeCity, getCityOffers } from './action';

const initialState = {
  activeCity: 'Paris',
  cityOffers: fullOffers,
  offers: fullOffers
};

export const placesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      if(action.payload){
        state.activeCity = action.payload;
      }
    })
    .addCase(getCityOffers, (state, action) => {
      if(action.payload){
        state.cityOffers = action.payload;
      }
    });
});
