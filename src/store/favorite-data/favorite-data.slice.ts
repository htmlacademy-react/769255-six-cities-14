import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, State, TFavoriteData } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { AxiosInstance } from 'axios';
import { TOfferPreview } from '../../types/offer-preview';

const initialState: TFavoriteData = {
  offers: [],
  isLoading: false,
};

export const fetchFavoriteOffersAction = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('favorite/fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<TOfferPreview[]>(APIRoute.Favorite);
  return data;
});

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
