import { ProductData, ProductBase } from './modal';

export interface ProductListProps {
  products: ProductData[] | [];
  loading: boolean;
  error: string | null;
  onAddProduct: (productData: ProductBase) => void;
  onUpdateProduct: (id: string, productData: ProductBase) => void;
}
