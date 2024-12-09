import React, { useState } from 'react';
import { List, ListItem, Button, TextField, Box } from '@mui/material';
import { ProductListProps } from '@/interfaces/props';
import { ProductData } from '@/interfaces/modal';

function ProductList(props: ProductListProps) {
  const { loading, products, error, onAddProduct, onUpdateProduct } = props;
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    price: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddOrUpdate = () => {
    const { id, name, price } = formState;

    const productData = {
      name,
      price: parseFloat(price),
      category: isEditing ? 'Updated category' : 'New category',
      description: isEditing
        ? 'Updated description'
        : 'Description for new product',
      stock: isEditing ? 50 : 10,
    };

    if (isEditing) {
      onUpdateProduct(id, productData);
    } else {
      onAddProduct(productData);
    }

    setFormState({ id: '', name: '', price: '' });
    setIsEditing(false);
  };

  const handleEdit = (product: ProductData) => {
    setFormState({
      id: product.id,
      name: product.name,
      price: product.price.toString(),
    });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setFormState({ id: '', name: '', price: '' });
    setIsEditing(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box sx={{ padding: '1rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
        <TextField
          name="name"
          label="Product Name"
          value={formState.name}
          onChange={handleInputChange}
        />
        <TextField
          name="price"
          label="Product Price"
          type="number"
          value={formState.price}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={handleAddOrUpdate}>
          {isEditing ? 'Update Product' : 'Add Product'}
        </Button>
        {isEditing && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCancelEdit}
          >
            Cancel Edit
          </Button>
        )}
      </Box>

      <List>
        {products.map((product) => (
          <ListItem
            key={product.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <Button variant="outlined" onClick={() => handleEdit(product)}>
              Edit
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ProductList;
