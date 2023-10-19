import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from './const';
import MainPage from './pages/Main';
import OfferPage from './pages/Offer';
import NotFoundPage from './pages/NotFound';
import FavoritesPage from './pages/Favorites';
import LoginPage from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

export type Place = {
  mark: string;
  image: string;
  price: number;
  priceText: string;
  bookmark?: boolean;
  rating?: number;
  name: string;
  type: string;
  id?: number;
};

type AppProps = {
  places: Place[];
};

function App({ places }: AppProps): React.ReactNode {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage places={places} />} />
          <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
