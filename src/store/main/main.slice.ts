import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TMainData } from '../../types/state';
import { addFavoriteFromMainAction } from '../main/main.api-actions';
import { fetchOffersAction } from './main.api-actions';

const initialState: TMainData = {
  activeCity: 'Paris',
  offers: [],
  isLoading: false,
  hasError: false,
  isLoadingAddFavorite: false
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
      .addCase(addFavoriteFromMainAction.pending, (state) => {
        state.isLoadingAddFavorite = true;
        state.hasError = false;
      })
      .addCase(addFavoriteFromMainAction.fulfilled, (state, action) => {
        state.isLoadingAddFavorite = false;
        if(action.payload){
          const index = state.offers.findIndex((item) => item.id === action?.payload?.id);
          state.offers[index].isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(addFavoriteFromMainAction.rejected, (state) => {
        state.isLoadingAddFavorite = false;
        state.hasError = true;
      });
  },
});

export const { changeCity } = mainData.actions;
