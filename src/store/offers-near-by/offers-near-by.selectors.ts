import { NameSpace } from '../../const';
import { TOfferPreview } from '../../types/offer-preview';
import { State } from '../../types/state';

export const getOffersNearBy = (state: State): TOfferPreview[] =>
  state[NameSpace.OffersNearBy].data;
export const getOffersNearByIsLoading = (state: State): boolean =>
  state[NameSpace.OffersNearBy].isLoading;
