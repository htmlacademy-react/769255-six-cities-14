import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { fetchFavoriteOffersAction2 } from '../store/api-actions';
import {
  getFavoriteOffers,
  getFavoriteOffersIsLoading,
} from '../store/favorite-data/favorite-data.selectors';

export default function useFavorite() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavoriteOffers);
  const isLoading = useAppSelector(getFavoriteOffersIsLoading);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction2());
  }, [dispatch]);

  return { isLoading, favorites };
}
