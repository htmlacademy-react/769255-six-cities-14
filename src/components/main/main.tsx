import { Helmet } from 'react-helmet-async';
import LocationCities from '../location-cities/location-cities';
import Locations from '../locations/locations';

function Main(): React.ReactNode {
  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <LocationCities />
          <Locations />
        </main>
      </div>
    </>
  );
}

export default Main;
