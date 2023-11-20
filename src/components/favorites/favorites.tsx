import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TOffer } from '../../types/offer';
import FavoritesCard from './favorites-card/favorites-card';
import Footer from '../footer/footer';

type FavoritesProps = {
  favorites: TOffer[];
};

function Favorites({ favorites }: FavoritesProps): React.ReactNode {
  return (
    <>
      <Helmet>
        <title>6 cities. Favorites</title>
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
                        <span>Amsterdam</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favorites.map((favorite) => (
                      <FavoritesCard favorite={favorite} key={favorite.id} />
                    ))}
                  </div>
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

export default Favorites;
