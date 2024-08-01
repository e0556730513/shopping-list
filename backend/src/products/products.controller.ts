import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new product' })
    @ApiResponse({ status: 201, description: 'The product has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    create(@Body() product: Product) {
        return this.productsService.create(product);
    }

    @Get()
    @ApiOperation({ summary: 'Retrieve all products' })
    @ApiResponse({ status: 200, description: 'List of products.', type: [Product] })
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieve a product by ID' })
    @ApiResponse({ status: 200, description: 'The product has been successfully retrieved.', type: Product })
    @ApiResponse({ status: 404, description: 'Product not found.' })
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a product' })
    @ApiResponse({ status: 200, description: 'The product has been successfully updated.', type: Product })
    @ApiResponse({ status: 404, description: 'Product not found.' })
    update(@Param('id') id: string, @Body() product: Product) {
        return this.productsService.update(+id, product);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a product' })
    @ApiResponse({ status: 204, description: 'The product has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Product not found.' })
    remove(@Param('id') id: string) {
        return this.productsService.remove(+id);
    }
}
