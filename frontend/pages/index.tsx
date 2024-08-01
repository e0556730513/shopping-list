// pages/index.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import AddProduct from '../components/AddProduct';
import ShoppingList from '../components/ShoppingList';

const Home: React.FC = () => {
  const [products, setProducts] = useState<string[]>([]);

  const addProduct = (product: string) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <div>
      <Header />
      <AddProduct addProduct={addProduct} />
      <ShoppingList products={products} />
    </div>
  );
};

export default Home;