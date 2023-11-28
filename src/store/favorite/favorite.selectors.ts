import { NameSpace } from '../../const';
import { TOfferPreview } from '../../types/offer-preview';
import { State } from '../../types/state';

export const getFavoriteOffers = (state: State): TOfferPreview[] =>
  state[NameSpace.Favorite].offers;
export const getFavoriteOffersIsLoading = (state: State): boolean =>
  state[NameSpace.Favorite].isLoading;
