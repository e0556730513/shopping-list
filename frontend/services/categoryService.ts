// src/services/categoryService.ts
import axiosInstance from './axiosInstance';

export const fetchCategories = async () => {
  const response = await axiosInstance.get('/category');
  return response.data;
};