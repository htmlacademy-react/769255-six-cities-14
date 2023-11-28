import { useAppDispatch } from '../../../hooks';
import { fetchOffersAction } from '../../../store/main/main.slice';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper">
                <b className="cities__status">Failed to load offers</b>
                <button
                  onClick={() => {
                    dispatch(fetchOffersAction());
                  }}
                  className="reviews__submit form__submit button"
                  type="submit"
                >
                  Upload again
                </button>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorScreen;
