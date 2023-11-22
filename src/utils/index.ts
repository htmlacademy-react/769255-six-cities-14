import { TCity } from '../types/city';
import { TLocation } from '../types/location';
import { TOfferPreview } from '../types/offer-preview';

export function getLocations(offers: TOfferPreview[]): TLocation[] {
  const locations: TLocation[] = [];

  offers.filter((offer) => {
    locations.push(offer.location);
  });

  return locations;
}

export function getCities(offers: TOfferPreview[]) {
  const cities: TCity[] = [];

  offers.filter((offer) => {
    if (!cities.find((city) => city.name === offer.city.name)) {
      cities.push(offer.city);
    }
  });
  return cities;
}

export function getCityOffers(
  offers: TOfferPreview[],
  cityName: string | null
) {
  if (cityName === null) {
    return offers;
  }

  const cityOffers = offers.filter((offer) => offer.city.name === cityName);
  return cityOffers;
}

export function sortOffers(
  offers: TOfferPreview[],
  sortingType: string | null
) {
  const sortedOffers: TOfferPreview[] = [...offers];
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

export function dateFormat(date: string) {
  const formatDate = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return formatDate.toLocaleString('ru-RU', options);
}
