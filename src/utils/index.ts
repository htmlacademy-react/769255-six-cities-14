import { TCity } from '../types/city';
import { TLocation } from '../types/location';
import { TOfferPreview } from '../types/offer-preview';
import { TReview } from '../types/review';

export function getLocations(offers: TOfferPreview[]): TLocation[] {
  const locations: TLocation[] = [];

  offers.filter((offer) => {
    locations.push(offer.location);
  });

  return locations;
}

export function getCity(offers: TOfferPreview[], activeCityName: string) {
  return offers.find((offer) => offer.city.name === activeCityName)?.city;
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

export function getCities(offers: TOfferPreview[]) {
  const cities: TCity[] = [];
  offers.filter((offer) => {
    if (!cities.find((city) => city.name === offer.city.name)) {
      cities.push(offer.city);
    }
  });
  return cities;
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
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
  };
  return formatDate.toLocaleString('en-GB', options);
}

export function sortCommentsByDate(comments: TReview[]) {
  return comments.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getCountStars(rating: number) {
  return (Math.round(rating) * 20).toString();
}
