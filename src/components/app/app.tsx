import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page';
import OfferPage from '../../pages/offer-page';
import { getAuthorizationStatus } from '../../store/user/user.selectors';
import Layout from '../layout/layout';
import HistoryRouter from '../routes/history-route/history-route';
import PrivateRoute from '../routes/private-route/private-route';
import LoginRoute from '../routes/login-route/login-route';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={`${AppRoute.Offers}/:id`} element={<OfferPage />} />
            <Route
              path={AppRoute.Login}
              element={
                <LoginRoute authorizationStatus={authorizationStatus}>
                  <LoginPage />
                </LoginRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage />
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
