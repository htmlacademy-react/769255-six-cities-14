import { CITIES } from '../../../const';
import City from './city/city';

export default function Cities() {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((item) => (
              <City city={item} key={item} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
