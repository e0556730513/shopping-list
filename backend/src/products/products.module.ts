// src/products/products.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model'; // Product model
import { ProductsService } from './products.service'; // Service for business logic
import { ProductsController } from './products.controller'; // Controller for handling HTTP requests

@Module({
  imports: [
    SequelizeModule.forFeature([Product]), // Import the Product model
  ],
  controllers: [ProductsController], // Register the controller
  providers: [ProductsService], // Register the service
  exports: [ProductsService], // Export the service if needed in other modules
})
export class ProductsModule {}