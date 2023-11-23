import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';
import LocationCities from './location-cities/location-cities';
import Locations from './locations/locations';
import Spinner from '../common/spinner/spinner';

function Main(): JSX.Element {
  const isLoading = useAppSelector((state) => state.places.isLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>6 cities</title>
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
