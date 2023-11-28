import { createSlice } from '@reduxjs/toolkit';
import { TFavoriteData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchFavoriteOffersAction } from '../api-actions';

const initialState: TFavoriteData = {
  offers: [],
  isLoading: false,
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
