import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { AppRoute } from '../../const';

function NotFound(): React.ReactNode {
  return (
    <>
      <Helmet>
        <title>6 cities. Not found</title>
      </Helmet>
      <Header />
      <div className="page page--gray page--main">
        <main className="page__main page__main--index page__main--index-empty">
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">Not found</b>
                  <Link to={AppRoute.Main}>
                    <button
                      className="reviews__submit form__submit button"
                      type="submit"
                    >
                      Go to main
                    </button>
                  </Link>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default NotFound;
