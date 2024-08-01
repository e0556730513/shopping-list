// src/shopping-list/product-list.model.ts
import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { ShoppingList } from './shopping-list.model';
import { Product } from '../products/product.model';

@Table
export class ProductList extends Model<ProductList> {
  @ForeignKey(() => ShoppingList)
  @Column
  shoppingListId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column
  quantity: number;
}