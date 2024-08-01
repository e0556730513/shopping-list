// src/app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories/category.model';
import { Product } from './products/product.model';
import { ShoppingList } from './shopping-list/shopping-list.model';
import { ProductList } from './shopping-list/product-list.model';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/category.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', // Change to your database dialect
      host: 'localhost', // Your MySQL host
      port: 3306, // Default MySQL port
      username: 'admin', // Your MySQL username
      password: 'Levko5775MS', // Your MySQL password
      database: 'shopping_list', // Your MySQL database name           
      models: [Category, Product, ShoppingList, ProductList], // Add your models here
      synchronize: true, // Automatically sync models with database
    }),
    CategoriesModule,
    ProductsModule,
    ShoppingListModule,
  ],
})
export class AppModule {}