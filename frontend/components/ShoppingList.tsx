// components/ShoppingList.tsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface ShoppingListProps {
  products: string[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ products }) => {
  return (
    <List>
      {products.map((product, index) => (
        <ListItem key={index}>
          <ListItemText primary={product} />
        </ListItem>
      ))}
    </List>
  );
};

export default ShoppingList;