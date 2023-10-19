import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Favorites from './Content';

function FavoritesPage() {
  return (
    <>
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <Header />
      <Favorites />
    </>
  );
}

export default FavoritesPage;
