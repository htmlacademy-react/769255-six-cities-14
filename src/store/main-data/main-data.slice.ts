import { createSlice } from '@reduxjs/toolkit';
import { TMainData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchOffersAction } from '../api-actions';

const initialState: TMainData = {
  activeCity: 'Paris',
  offers: [],
  isLoading: false,
  hasError: false,
};

export const mainData = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeCity(state, action) {
      state.activeCity = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { changeCity } = mainData.actions;
