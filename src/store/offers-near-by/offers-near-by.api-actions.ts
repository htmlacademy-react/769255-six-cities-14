import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { TOfferPreview } from '../../types/offer-preview';
import { AppDispatch, State } from '../../types/state';

export const fetchOffersNearByAction = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'OFFERS_NEAR_BY/fetchOffersNearBy',
  async (_arg, { getState, extra: api }) => {
    const state = getState();
    const offerId = state.OFFER.offerId;
    const { data } = await api.get<TOfferPreview[]>(
      `${APIRoute.Offers}/${offerId}/nearBy`
    );
    return data;
  }
);
