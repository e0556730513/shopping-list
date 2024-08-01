// pages/recipes.tsx
import React from 'react';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';

const Recipes: React.FC = () => {
  const recipes = ['Homemade Waffles', 'Salmon with Rice and Veggies', 'Spanish Gazpacho Soup'];

  return (
    <div>
      <Header />
      <h2>Recipes</h2>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recipes;