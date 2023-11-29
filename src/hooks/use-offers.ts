import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getErrorStatus, getOffersIsLoading } from '../store/main/main.selectors';
import { fetchOffersAction } from '../store/main/main.slice';

export default function useOffers() {
  const dispatch = useAppDispatch();
  const hasError = useAppSelector(getErrorStatus);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);
  const isLoading = useAppSelector(getOffersIsLoading);

  return {isLoading, hasError};
}
