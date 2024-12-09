export interface ProductBase {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}
export interface ProductData extends ProductBase {
  id: string;
}
export interface UpdateProductData extends ProductBase {
  id: string;
}
