import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Controller('category') // This defines the base route
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get() // This handles GET requests to /category
  async getCategories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}