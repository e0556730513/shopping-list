// src/services/shoppingListService.ts
import axiosInstance from './axiosInstance';


export const saveShoppingList = async (shoppingList) => {
  const response = await axiosInstance.post('/shopping-lists', shoppingList);
  return response.data;
};