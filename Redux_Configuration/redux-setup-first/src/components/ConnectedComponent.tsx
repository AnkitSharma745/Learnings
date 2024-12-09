import { AppDispatch, RootState } from '@/redux/rootStore';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  addProduct,
  fetchProducts,
  updateProduct,
} from '@/redux/features/product/productApi';
import { ProductBase } from '@/interfaces/modal';
import ProductList from './ProductList';

function ConnectedComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = (productData: ProductBase) => {
    dispatch(addProduct(productData));
  };
  const handleUpdateProduct = (id: string, productData: ProductBase) => {
    dispatch(updateProduct({ id, data: productData }));
  };

  return (
    <ProductList
      products={products}
      loading={loading}
      error={error}
      onAddProduct={handleAddProduct}
      onUpdateProduct={handleUpdateProduct}
    />
  );
}

export default ConnectedComponent;
