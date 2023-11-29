import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, NameSpace } from '../../const';
import { TOfferPreview } from '../../types/offer-preview';
import { AppDispatch, State, TMainData } from '../../types/state';
import { redirectToRoute } from '../actions';

const initialState: TMainData = {
  activeCity: 'Paris',
  offers: [],
  isLoading: false,
  hasError: false,
};

export const fetchOffersAction = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('MAIN/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TOfferPreview[]>(APIRoute.Offers);
  if (!data) {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }
  return data;
});

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
      });
  },
});

export const { changeCity } = mainData.actions;
