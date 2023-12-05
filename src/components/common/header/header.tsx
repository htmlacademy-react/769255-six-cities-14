import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logoutAction } from '../../../store/user/user.api-actions';
import { fetchFavoriteOffersAction } from '../../../store/favorite/favorite.api-actions';
import { getFavoriteOffers } from '../../../store/favorite/favorite.selectors';
import {
  getAuthorizationStatus,
  getUser,
} from '../../../store/user/user.selectors';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const isLoggedIn = authStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, authStatus]);

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
              <li className="header__nav-item user">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.Favorites}
                >
                  <span className="header__user-name user__name">
                    {user?.email}
                  </span>
                </Link>
                <span className="header__favorite-count">
                  {favoriteOffers.length}
                </span>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to={AppRoute.Login}
                  onClick={handleLogout}
                >
                  <span className="header__signout">
                    {isLoggedIn ? 'Sign out' : 'Sign in'}
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
