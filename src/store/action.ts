import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';

export const changeCity = createAction(
  'MAIN/changeCity',
  (cityName: string | null) => ({
    payload: cityName,
  })
);

export const getCityOffers = createAction(
  'MAIN/getCityOffers',
  (cityName: string | null, offers: TOffer[]) => {
    const cityOffers: TOffer[] = offers.filter(
      (offer) => offer.city.name === cityName
    );

    return {
      payload: cityOffers,
    };
  }
);
