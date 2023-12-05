import { Helmet } from 'react-helmet-async';
import { HelmetTitles } from '../../const';
import useFavorite from '../../hooks/use-favorite';
import { getCities, getCityOffers } from '../../utils';
import Footer from '../common/footer/footer';
import Spinner from '../common/spinner/spinner';
import FavoritesEmpty from './favorites-empty/favorites-empty';
import FavoriteLocation from './favorite-location/favorite-location';

function Favorites(): JSX.Element {
  const { isLoading, favorites } = useFavorite();

  const cities = getCities(favorites);

  return (
    <>
      <Helmet>
        <title>{HelmetTitles.Favorite}</title>
      </Helmet>
      <div className="page">
        {favorites.length === 0 ? (
          <FavoritesEmpty />
        ) : (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <ul className="favorites__list">
                    {cities.map((city) => (
                      <FavoriteLocation
                        city={city.name}
                        cityFavoriteOffers={getCityOffers(favorites, city.name)}
                        key={city.name}
                      />
                    ))}
                  </ul>
                )}
              </section>
            </div>
          </main>
        )}
        <Footer />
      </div>
    </>
  );
}

export default Favorites;
