import { useAppSelector } from '.';
import {
  getActiveCity,
  getOffers,
} from '../store/main/main.selectors';
import { getCity, getCityOffers } from '../utils';

export default function useLocations() {
  const activeCityName = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const cityOffers = getCityOffers(offers, activeCityName);
  const city = getCity(offers, activeCityName);

  return { cityOffers, city };
}
