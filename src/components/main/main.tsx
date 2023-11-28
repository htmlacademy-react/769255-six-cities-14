import { Helmet } from 'react-helmet-async';
import useOffers from '../../hooks/use-offers';
import Spinner from '../common/spinner/spinner';
import LocationCities from './location-cities/location-cities';
import Locations from './locations/locations';
import { HelmetTitles } from '../../const';

function Main(): JSX.Element {
  const isLoading = useOffers();

  return (
    <>
      <Helmet>
        <title>{HelmetTitles.Main}</title>
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="page page--gray page--main">
          <main className="page__main page__main--index">
            <LocationCities />
            <Locations />
          </main>
        </div>
      )}
    </>
  );
}

export default Main;
