// src/shopping-list/shopping-list.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ShoppingList } from './shopping-list.model';

@Injectable()
export class ShoppingListService {
  constructor(
    @InjectModel(ShoppingList)
    private readonly shoppingListModel: typeof ShoppingList,
  ) {}

  async create(shoppingList: ShoppingList): Promise<ShoppingList> {
    return this.shoppingListModel.create(shoppingList);
  }

  async findAll(): Promise<ShoppingList[]> {
    return this.shoppingListModel.findAll();
  }

  async findOne(id: number): Promise<ShoppingList> {
    return this.shoppingListModel.findByPk(id);
  }
}