import { THost } from './host';
import { TOfferPreview } from './offer-preview';

export type TOfferImages = string[];

export type TOfferGoods = string[];

export type TOffer = TOfferPreview & {
  images: TOfferImages;
  bedrooms: number;
  maxAdults: number;
  goods: TOfferGoods;
  host: THost;
  description: string;
};
