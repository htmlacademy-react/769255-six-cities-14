import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchFavoriteOffersAction } from '../../../store/favorite/favorite.api-actions';
import { getFavoriteOffers } from '../../../store/favorite/favorite.selectors';
import { logoutAction } from '../../../store/user/user.api-actions';
import {
  getAuthorizationStatus,
  getUserEmail,
} from '../../../store/user/user.selectors';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const email = useAppSelector(getUserEmail);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const isLoggedIn = authStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, isLoggedIn]);

  const handleLogout = () => {
    if (isLoggedIn) {
      dispatch(logoutAction());
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.Favorites}
              >
                <li className="header__nav-item user">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>

                  <span className="header__user-name user__name">{email}</span>

                  <span className="header__favorite-count">
                    {favoriteOffers.length}
                  </span>
                </li>
              </Link>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to={AppRoute.Login}
                  onClick={handleLogout}
                >
                  <span className="header__signout">
                    {isLoggedIn ? 'Log out' : 'Login'}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
