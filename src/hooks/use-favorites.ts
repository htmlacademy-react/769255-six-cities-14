import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  getFavoriteOffers,
  getFavoriteOffersIsLoading,
} from '../store/favorite/favorite.selectors';
import { fetchFavoriteOffersAction } from '../store/favorite/favorite.api-actions';
import { getCities } from '../utils';

export default function useFavorite() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavoriteOffers);
  const isLoading = useAppSelector(getFavoriteOffersIsLoading);
  const cities = getCities(favorites);


  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  return { isLoading, favorites, cities };
}
