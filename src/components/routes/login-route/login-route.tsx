import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';

type LoginRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function LoginRoute({ authorizationStatus, children }: LoginRouteProps) {
  return authorizationStatus === AuthorizationStatus.Auth ? (
    <Navigate to={AppRoute.Main} />
  ) : (
    children
  );
}

export default LoginRoute;
