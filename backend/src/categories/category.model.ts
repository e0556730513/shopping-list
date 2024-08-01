// src/categories/category.model.ts
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'category' })
export class Category extends Model<Category> {
  @Column
  name: string;
}