
export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const RATINGS = ['1', '2', '3', '4', '5'];

export const REVIEW_MIN_LENGTH = 50;

export const REVIEW_MAX_LENGTH = 300;

export const COUNT_OFFER_IMAGES = 6;

export const COUNT_OFFERS_NEAR_BY = 3;

export const COUNT_REVIEWS = 10;

export const TIMEOUT_SHOW_ERROR = 3000;

export const URL_MARKER_DEFAULT =
  'markup/img/pin.svg';

export const URL_MARKER_CURRENT =
  'markup/img/pin-active.svg';

export const TITLE = '6 cities';

export enum HelmetTitles {
  Main = TITLE,
  Offer = `${TITLE}: Offer`,
  Login = `${TITLE}: Login`,
  Favorite = `${TITLE}: Favorite`,
  NotFound = `${TITLE}: NotFound`,
}

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offers = '/offer',
  NotFound = '/notFound',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Offers = '/offers',
  Comments = '/comments',
}

export const sortingTypes = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum NameSpace {
  Main = 'MAIN',
  Offer = 'OFFER',
  User = 'USER',
  Favorite = 'FAVORITE',
  OffersNearBy = 'OFFERS_NEAR_BY',
  Reviews = 'REVIEWS',
  Error='ERROR'
}
