import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffersNearByData } from '../../types/state';
import { fetchOffersNearByAction } from './offers-near-by.api-actions';

const initialState: TOffersNearByData = {
  data: [],
  isLoading: false,
};

export const offersNearByData = createSlice({
  name: NameSpace.OffersNearBy,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearByAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffersNearByAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffersNearByAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
