import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  getFavoriteOffers,
  getFavoriteOffersIsLoading,
} from '../store/favorite-data/favorite-data.selectors';
import { fetchFavoriteOffersAction } from '../store/api-actions';

export default function useFavorite() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavoriteOffers);
  const isLoading = useAppSelector(getFavoriteOffersIsLoading);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  return { isLoading, favorites };
}
