import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { fetchOffersAction2 } from '../store/api-actions';
import { getOffersIsLoading } from '../store/main-data/main-data.selectors';

export default function useOffers(): boolean {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction2());
  }, [dispatch]);
  const isLoading = useAppSelector(getOffersIsLoading);

  return isLoading;
}
