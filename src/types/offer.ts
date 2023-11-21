import { TCity } from './city';
import { THost } from './host';
import { TLocation } from './location';

export type TOfferImages = string[];

export type TOfferGoods = string[];

export type TOffer = {
  city: TCity;
  previewImage: string;
  images: TOfferImages;
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: TOfferGoods;
  host: THost;
  description: string;
  location: TLocation;
  id: number;
};
