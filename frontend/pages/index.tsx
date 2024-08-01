// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AddProduct from '../components/AddProduct';
import ShoppingList from '../components/ShoppingList';

interface Category {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<{ name: string; category: string }[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const addProduct = (product: { name: string; category: string }) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://localhost:3000/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <Header />
      <AddProduct addProduct={addProduct} />
      <ShoppingList products={products} categories={categories} />
    </div>
  );
};

export default Home;