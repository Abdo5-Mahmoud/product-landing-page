// src/components/TopBar.tsx

import { Product } from "./product";

export type TopBarProps = {
  shipping?: string;
  returns?: string;
};

export type ThumbnailsProps = {
  images: string[];
  heroIndex?: number;
  setHeroIndex: (index: number) => void;
};

export type GalleryProps = {
  images: string[];
};

export type VisualColProps = {
  product: Product;
  heroIndex?: number;
  setHeroIndex: (index: number) => void;
  modelViewerLoaded?: boolean;
};

export type OptionsProps = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

export type InfoColProps = {
  product: Product;
  onBuy: (...args: string[]) => void;
  setSelectedColor?: (color: string) => void; // optional if parent handles state
  selectedColor?: string;
};

export type StickyMobileCTAProps = {
  openModal: () => void;
};

export type BuyPayload = { name?: string; phone?: string };

export type QuickBuyModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  showToast: (message: string) => void;
};

export type ProductProps = {
  productProp: Product;
};
export type Errors = {
  name?: string;
  phone?: string;
};
