export const TIMEOUT_SHOW_ERROR = 2000;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Main = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Offer = '/offer',
  Favorites = '/favorites',
  Offers = '/offers',
}

export const sortingTypes = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];
