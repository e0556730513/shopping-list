// src/categories/categories.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { ProductsService } from 'src/products/products.service';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoriesModule {}