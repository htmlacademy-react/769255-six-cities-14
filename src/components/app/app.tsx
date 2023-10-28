import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { TOffer } from '../../types/offer';
import { favorites } from '../../mocks/favorites';

type AppProps = {
  offers: TOffer[];
};

function App({ offers }: AppProps): React.ReactNode {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<MainPage offers={offers} />} />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={<OfferPage offers={offers} />}
            />
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <FavoritesPage favorites={favorites} />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
