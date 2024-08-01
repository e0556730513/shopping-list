// src/products/product.model.ts
import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Category } from '../categories/category.model';

@Table
export class Product extends Model<Product> {
  @Column
  name: string;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
}