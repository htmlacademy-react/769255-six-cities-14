import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { State } from '../../types/state';

export const getOffer = (state: State): TOffer | null =>
  state[NameSpace.Offer].data;
export const getOfferIsLoading = (state: State): boolean =>
  state[NameSpace.Offer].isLoading;
export const getOfferId = (state: State): string =>
  state[NameSpace.Offer].offerId;
