import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TMainData } from '../../types/state';
import { postFavoriteAction } from '../favorite/favotite.api-actions';
import { fetchOffersAction } from './main.api-actions';

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
    changeCity(state, action: PayloadAction<string | null>) {
      if (action.payload && state.activeCity !== action.payload) {
        state.activeCity = action.payload;
      }
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
      })
      .addCase(postFavoriteAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(postFavoriteAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postFavoriteAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { changeCity } = mainData.actions;
