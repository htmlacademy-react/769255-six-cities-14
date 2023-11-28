import { NameSpace } from '../../const';
import { TOfferPreview } from '../../types/offer-preview';
import { State } from '../../types/state';

export const getOffers = (state: State): TOfferPreview[] =>
  state[NameSpace.Main].offers;
export const getOffersIsLoading = (state: State): boolean =>
  state[NameSpace.Main].isLoading;
export const getActiveCity = (state: State): string =>
  state[NameSpace.Main].activeCity;
export const getErrorStatus = (state: State): boolean =>
  state[NameSpace.Main].hasError;
