import LocationCity from '../location-city/location-city';

type LoctaionCitiesProps = {
  cities: string[];
};

export default function LocationCities({ cities }: LoctaionCitiesProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => (
            <LocationCity city={item} key={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}
