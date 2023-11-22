import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { favorites } from '../../mocks/favorites';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page';
import OfferPage from '../../pages/offer-page';
import HistoryRouter from '../history-route/history-route';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.auth.authorizationStatus
  );
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={`${AppRoute.Offers}/:id`} element={<OfferPage />} />
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage favorites={favorites} />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
