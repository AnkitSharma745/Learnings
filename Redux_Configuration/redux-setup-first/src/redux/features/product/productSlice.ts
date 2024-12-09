import { createSlice } from '@reduxjs/toolkit';
import { ProductStore } from './productTypes';
import { addProduct, fetchProducts, updateProduct } from './productApi';

const initialState: ProductStore = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProducts: (state) => {
      const myState = state;
      myState.products = [];
      myState.loading = false;
      myState.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        const myState = state;
        myState.loading = true;
        myState.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const myState = state;

        myState.loading = false;
        myState.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        const myState = state;

        myState.loading = false;
        myState.error = action.payload || 'Failed to fetch products';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const myState = state;
        const index = state.products.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          myState.products[index] = action.payload;
        }
      });
  },
});

export const { resetProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
export default productSlice.reducer;
