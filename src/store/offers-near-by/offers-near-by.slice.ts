import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpace } from '../../const';
import { TOfferPreview } from '../../types/offer-preview';
import { AppDispatch, State, TOffersNearByData } from '../../types/state';

const initialState: TOffersNearByData = {
  data: [],
  isLoading: false,
};

export const fetchOffersNearByAction = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffersNearBy', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offerId;
  const { data } = await api.get<TOfferPreview[]>(
    `${APIRoute.Offers}/${offerId}/nearBy`
  );
  return data;
});

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
