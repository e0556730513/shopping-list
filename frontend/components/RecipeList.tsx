// components/RecipeList.tsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface RecipeListProps {
  recipes: string[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe, index) => (
        <ListItem key={index}>
          <ListItemText primary={recipe} />
        </ListItem>
      ))}
    </List>
  );
};

export default RecipeList;