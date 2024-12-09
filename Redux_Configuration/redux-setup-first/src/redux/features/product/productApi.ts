import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData, postData, updateData } from '@/services/axiosWrapper/fetch';
import { productApi } from '@/utils/endpoints';
import {
  addProductAction,
  getAllProduct,
  ProductBase,
  ProductData,
  updateProductAction,
} from './productTypes';

export const fetchProducts = createAsyncThunk<
  ProductData[],
  void,
  { rejectValue: string }
>(getAllProduct, async (_, { rejectWithValue }) => {
  try {
    return await getData(productApi, false);
  } catch (error) {
    return rejectWithValue(
      (error as Error).message || 'Failed to fetch products'
    );
  }
});

export const addProduct = createAsyncThunk<
  ProductData,
  ProductBase,
  { rejectValue: string }
>(addProductAction, async (data, { rejectWithValue }) => {
  try {
    return await postData(productApi, data, false);
  } catch (error) {
    return rejectWithValue((error as Error).message || 'Failed to add product');
  }
});

export const updateProduct = createAsyncThunk<
  ProductData,
  { id: string; data: Partial<ProductBase> },
  { rejectValue: string }
>(updateProductAction, async ({ id, data }, { rejectWithValue }) => {
  try {
    return await updateData(`${productApi}/${id}`, data, false);
  } catch (error) {
    return rejectWithValue(
      (error as Error).message || 'Failed to update product'
    );
  }
});
