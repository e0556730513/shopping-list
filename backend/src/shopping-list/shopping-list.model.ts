// src/shopping-list/shopping-list.model.ts
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ShoppingList extends Model<ShoppingList> {
  @Column
  name: string;
}