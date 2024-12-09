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
export interface ProductStore {
  products: ProductData[];
  loading: boolean;
  error: string | null;
}
export const getAllProduct = 'products/getAllProducts';
export const addProductAction = 'product/addProduct';
export const updateProductAction = 'product/updateProduct';
