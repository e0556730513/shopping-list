// src/shopping-list/shopping-list.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShoppingList } from './shopping-list.model';
import { ProductList } from './product-list.model';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListController } from './shopping-list.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([ShoppingList, ProductList]), // Import the models
  ],
  controllers: [ShoppingListController],
  providers: [ShoppingListService],
  exports: [ShoppingListService], // Export the service if needed in other modules
})
export class ShoppingListModule {}