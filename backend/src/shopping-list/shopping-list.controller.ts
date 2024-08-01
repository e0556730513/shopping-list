// src/shopping-list/shopping-list.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingList } from './shopping-list.model';

@Controller('shopping-lists')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Post()
  async create(@Body() shoppingList: ShoppingList): Promise<ShoppingList> {
    return this.shoppingListService.create(shoppingList);
  }

  @Get()
  async findAll(): Promise<ShoppingList[]> {
    return this.shoppingListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ShoppingList> {
    return this.shoppingListService.findOne(id);
  }
}