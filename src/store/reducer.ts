import { createReducer } from '@reduxjs/toolkit';
import { fullOffers } from '../mocks/fullOffers';
import { changeCity, getCityOffers } from './action';

const initialState = {
  cityName: 'Paris',
  cityOffers: fullOffers,
  offers: fullOffers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      if(action.payload){
        state.cityName = action.payload;
      }
    })
    .addCase(getCityOffers, (state, action) => {
      if(action.payload){
        state.cityOffers = action.payload;
      }
    });
});
