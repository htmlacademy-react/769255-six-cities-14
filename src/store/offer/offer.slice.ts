import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TOfferPreview } from '../../types/offer-preview';
import { AppDispatch, State, TOfferData } from '../../types/state';

const initialState: TOfferData = {
  data: null,
  isLoading: false,
  offerId: '',
};

export const fetchOfferAction = createAsyncThunk<
  TOffer,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('OFFER/fetchOffer', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offerId;
  const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);
  return data;
});

export const fetchOffersNearByAction = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('OFFER/fetchOffersNearBy', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offerId;
  const { data } = await api.get<TOfferPreview[]>(
    `${APIRoute.Offers}/${offerId}/nearBy`
  );
  return data;
});

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setOfferId(state, action: PayloadAction<string>) {
      state.offerId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setOfferId } = offerData.actions;
