import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  fetchOfferAction,
  fetchOfferCommentsAction,
  fetchOffersNearByAction,
} from '../store/api-actions';
import {
  getOffer,
  getOfferIsLoading,
  getOffersNearBy,
} from '../store/offer-data/offer-data.selectors';
import { setOfferId } from '../store/offer-data/offer-data.slice';

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
