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
