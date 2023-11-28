import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute, HelmetTitles } from '../../const';

function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>{HelmetTitles.NotFound}</title>
      </Helmet>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <div className="cities">
            <div className="cities__places-container container">
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
