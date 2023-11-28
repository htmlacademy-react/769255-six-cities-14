import { createSlice } from '@reduxjs/toolkit';
import { TMainData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchOffersAction2 } from '../api-actions';

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
      .addCase(fetchOffersAction2.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction2.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffersAction2.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { changeCity } = mainData.actions;
