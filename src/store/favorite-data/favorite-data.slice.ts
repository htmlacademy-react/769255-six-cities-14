import { createSlice } from '@reduxjs/toolkit';
import { TFavoriteData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchFavoriteOffersAction2 } from '../api-actions';

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
      .addCase(fetchFavoriteOffersAction2.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFavoriteOffersAction2.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoriteOffersAction2.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
