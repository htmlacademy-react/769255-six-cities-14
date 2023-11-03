import { Helmet } from 'react-helmet-async';
import { cities } from '../../mocks/cities';
import { TOffer } from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import LocationCities from '../location-cities/location-cities';
import Map from '../map/map';
import { TLocation } from '../../types/location';
import { CITY } from '../../const';

function getLocations(offers: TOffer[], city: string): TLocation[] {
  const locations: TLocation[] = [];

  offers.filter((offer) => {
    if (offer.city.name === city) {
      locations.push(offer.location);
    }
  });

  return locations;
}

type MainProps = {
  offers: TOffer[];
};

function Main({ offers }: MainProps): React.ReactNode {
  const locations = getLocations(offers, CITY.name);

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <LocationCities cities={cities} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex={0}
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Top rated first
                    </li>
                  </ul>
                </form>
                <OffersList offers={offers} />
              </section>
              <div className="cities__right-section">
                <Map city={CITY} points={locations} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;
