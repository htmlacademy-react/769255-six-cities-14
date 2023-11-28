import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  getFavoriteOffers,
  getFavoriteOffersIsLoading,
} from '../store/favorite/favorite.selectors';
import { fetchFavoriteOffersAction } from '../store/favorite/favorite.slice';

export default function useFavorite() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavoriteOffers);
  const isLoading = useAppSelector(getFavoriteOffersIsLoading);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  return { isLoading, favorites };
}
