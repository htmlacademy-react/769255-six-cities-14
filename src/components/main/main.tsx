import { Helmet } from 'react-helmet-async';
import { HelmetTitles } from '../../const';
import useOffers from '../../hooks/use-offers';
import Spinner from '../common/spinner/spinner';
import ErrorScreen from './error-screen/error-screen';
import Cities from './cities/cities';
import Locations from './locations/locations';

function Main(): JSX.Element {
  const { isLoading, hasError } = useOffers();

  if (!isLoading && hasError) {
    return <ErrorScreen />;
  }

  return (
    <>
      <Helmet>
        <title>{HelmetTitles.Main}</title>
      </Helmet>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          {isLoading && <Spinner />}
          <Cities />
          <Locations />
        </main>
      </div>
    </>
  );
}

export default Main;
