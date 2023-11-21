import { TCity } from '../types/city';
import { TLocation } from '../types/location';
import { TOffer } from '../types/offer';

export function getLocations(offers: TOffer[]): TLocation[] {
  const locations: TLocation[] = [];

  offers.filter((offer) => {
    locations.push(offer.location);
  });

  return locations;
}

export function getCities(offers: TOffer[]) {
  const cities: TCity[] = [];

  offers.filter((offer) => {
    if (!cities.find((city) => city.name === offer.city.name)) {
      cities.push(offer.city);
    }
  });
  return cities;
}

export function getCityOffers(offers: TOffer[], cityName: string | null) {
  if (cityName === null) {
    return offers;
  }

  const cityOffers = offers.filter((offer) => offer.city.name === cityName);
  return cityOffers;
}

export function sortOffers(offers: TOffer[], sortingType: string | null) {
  const sortedOffers: TOffer[] = [...offers];
  switch (sortingType) {
    case 'Price: low to high':
      return sortedOffers.sort(
        (offer1, offer2) => offer1?.price - offer2?.price
      );

    case 'Price: high to low':
      return sortedOffers.sort(
        (offer1, offer2) => offer2?.price - offer1?.price
      );

    case 'Top rated first':
      return sortedOffers.sort(
        (offer1, offer2) => offer2?.rating - offer1?.rating
      );

    default:
      return offers;
  }
}
