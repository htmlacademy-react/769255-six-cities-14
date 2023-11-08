import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';

export const changeCity = createAction(
  'main/changeCity',
  (cityName: string) => ({
    payload: cityName,
  })
);

export const getCityOffers = createAction(
  'main/getCityOffers',
  (cityName: string, offers: TOffer[]) => {
    const cityOffers: TOffer[] = offers.filter(
      (offer) => offer.city.name === cityName
    );

    return {
      payload: cityOffers,
    };
  }
);
