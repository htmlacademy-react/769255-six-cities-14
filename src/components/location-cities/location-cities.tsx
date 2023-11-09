import { useAppSelector } from '../../hooks';
import { getCities } from '../../utils';
import LocationCity from '../location-city/location-city';

//Список городов
export default function LocationCities() {
  const offers = useAppSelector((state) => state.offers);
  const cities = getCities(offers);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((item) => (
              <LocationCity city={item.name} key={item.name} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
