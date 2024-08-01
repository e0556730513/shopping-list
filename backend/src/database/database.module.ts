// src/database/database.module.ts

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../products/product.model'; // Adjust path as needed
import { Category } from 'src/categories/category.model';
import { ProductsModule } from 'src/products/products.module';
import { CategoriesModule } from 'src/categories/category.module';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost', // Your MySQL host
            port: 3306, // Default MySQL port
            username: 'admin', // Your MySQL username
            password: 'Levko5775MS', // Your MySQL password
            database: 'shopping_list', // Your MySQL database name
            models: [Product,Category], // Add your models here
            autoLoadModels: true,
            synchronize: true, // Use with caution in production
        }),
        ProductsModule,
        CategoriesModule,
    ],
})
export class DatabaseModule {}