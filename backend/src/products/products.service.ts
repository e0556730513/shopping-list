// src/products/products.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product)
        private productModel: typeof Product,
    ) {}

    async create(product: Product): Promise<Product> {
        return this.productModel.create(product);
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.findAll();
    }

    async findOne(id: number): Promise<Product> {
        return this.productModel.findByPk(id);
    }

    async update(id: number, product: Product): Promise<Product> {
        await this.productModel.update(product, { where: { id } });
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.productModel.destroy({ where: { id } });
    }
}