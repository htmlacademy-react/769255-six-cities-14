import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HelmetTitles } from '../../const';
import useFavorite from '../../hooks/use-favorite';
import Footer from '../common/footer/footer';
import Spinner from '../common/spinner/spinner';
import FavoriteCard from './favorite-card/favorite-card';

function Favorite(): JSX.Element {
  const { isLoading, favorites } = useFavorite();

  return (
    <>
      <Helmet>
        <title>{HelmetTitles.Favorite}</title>
      </Helmet>
      <div className="page">
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="/">
                        <span>Go to main</span>
                      </Link>
                    </div>
                  </div>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <div className="favorites__places">
                      {favorites.map((favorite) => (
                        <FavoriteCard favorite={favorite} key={favorite.id} />
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Favorite;
