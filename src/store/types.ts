export interface Images {
  thumb: string;
  original: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  specification: string;
  price: number;
  images: Images[];
}
