import { Helmet } from 'react-helmet-async';
import { HelmetTitles } from '../../const';
import useOffers from '../../hooks/use-offers';
import Spinner from '../common/spinner/spinner';
import ErrorScreen from './error-screen/error-screen';
import LocationCities from './location-cities/location-cities';
import Locations from './locations/locations';

function Wrapper(): JSX.Element {
  const { isLoading, hasError } = useOffers();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading && hasError) {
    return <ErrorScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <LocationCities />
        <Locations />
      </main>
    </div>
  );
}

function Main(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>{HelmetTitles.Main}</title>
      </Helmet>
      <Wrapper />
    </>
  );
}

export default Main;
