export type ProductInfoType = {
  title: string;
  src: string;
  details: string;
  id: number;
};

export type ProductsType = {
  increaseCart: (product: ProductInfoType) => void;
};

export type ProductCardType = ProductsType & {
  product: ProductInfoType;
};

export type CartType = ProductInfoType & {
  quantity: number;
};
