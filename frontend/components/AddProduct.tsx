// components/AddProduct.tsx
import React, { useEffect, useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { fetchCategories } from '../services/categoryService';


interface AddProductProps {
  addProduct: (product: { name: string; category: string }) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    loadCategories();
  }, []);

  const handleAddProduct = () => {
    addProduct({ name: productName, category: selectedCategory });
    setProductName('');
    setSelectedCategory('');
  };

  return (
    <div>
      <TextField
        label="Add Product"
        variant="outlined"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          label="Category"
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={handleAddProduct}>Add</Button>
    </div>
  );
};

export default AddProduct;