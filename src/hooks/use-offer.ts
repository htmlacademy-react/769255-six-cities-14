import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';

import {
  getOffer,
  getOfferIsLoading,
} from '../store/offer/offer.selectors';
import { fetchOfferAction } from '../store/offer/offer.api-actions';
import { getOffersNearBy } from '../store/offers-near-by/offers-near-by.selectors';
import { fetchOfferCommentsAction } from '../store/reviews/reviews.api-actions';
import { fetchOffersNearByAction } from '../store/offers-near-by/offers-near-by.api-actions';
import { setOfferId } from '../store/offer/offer.slice';

export default function useOffer(offerId: string | undefined) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (offerId) {
      dispatch(setOfferId(offerId));
      dispatch(fetchOfferAction());
      dispatch(fetchOffersNearByAction());
      dispatch(fetchOfferCommentsAction());
    }
  }, [dispatch, offerId]);

  const isLoading = useAppSelector(getOfferIsLoading);
  const offer = useAppSelector(getOffer);
  const offersNearBy = useAppSelector(getOffersNearBy);
  const slicedOffersNearBy = offersNearBy.slice(0, 3);

  return { isLoading, offer, slicedOffersNearBy };
}
