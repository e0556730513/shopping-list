// components/ShoppingList.tsx
import React from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';

interface Product {
  name: string;
  category: string;
}

interface ShoppingListProps {
  products: Product[];
  categories: { id: string; name: string }[];
}

const handleAddShoppingList = () => {
  // add({ name: productName, category: selectedCategory });
  // setProductName('');
  // setSelectedCategory('');
};


const ShoppingList: React.FC<ShoppingListProps> = ({ products }) => {
  return (
    <div>
    <List>
      {products.map((product, index) => (
        <ListItem key={index}>
          <ListItemText 
            primary={product.name}  secondary={product.category} 
          />
        </ListItem>
      ))}
    </List>
     <Button onClick={handleAddShoppingList}>Save</Button>
     </div>
     
  );
};

export default ShoppingList;