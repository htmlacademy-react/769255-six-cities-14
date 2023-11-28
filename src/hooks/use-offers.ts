import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getOffersIsLoading } from '../store/main-data/main-data.selectors';
import { fetchOffersAction } from '../store/main-data/main-data.slice';

export default function useOffers(): boolean {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);
  const isLoading = useAppSelector(getOffersIsLoading);

  return isLoading;
}
