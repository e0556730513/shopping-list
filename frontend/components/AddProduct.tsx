// components/AddProduct.tsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface AddProductProps {
  addProduct: (product: string) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ addProduct }) => {
  const [productName, setProductName] = useState('');

  const handleAddProduct = () => {
    addProduct(productName);
    setProductName('');
  };

  return (
    <div>
      <TextField
        label="Add Product"
        variant="outlined"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <Button onClick={handleAddProduct}>Add</Button>
    </div>
  );
};

export default AddProduct;