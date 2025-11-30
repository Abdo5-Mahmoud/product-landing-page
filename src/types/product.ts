// src/types/product.ts
type Logo = { text: string } | { img: string };

export type Brand = {
  brandName: string;
  brandLogo: Logo;
  tagline?: string;
};

export type Benefit = {
  title: string;
  subtitle?: string;
};

export type Spec = {
  key: string;
  value: string;
};

export type FAQ = {
  q: string;
  a: string;
};

export type Product = {
  name: string;
  short?: string;
  price: number;
  currency?: string; // e.g. 'ج.م'
  images: string[]; // array of image URLs
  modelUrl?: string | null;
  sku?: string;
  skuVisible?: boolean;
  badges?: string[]; // small text badges
  benefits?: Benefit[];
  // the added simple fields:
  shipping?: string; // header display
  returns?: string; // short returns text shown under benefits/specs
  colors?: string[]; // available colors names
  specs?: Spec[]; // technical specs
  faqs?: FAQ[]; // frequently asked questions
};
