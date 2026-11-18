import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}
    
    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Post()
    createProduct() {
        // Logic to create a new product
        const newProduct = { id: 4, name: 'Product 4', price: 15.99 };
        return this.productsService.createProduct(newProduct);
    }

    @Put(':id')
    updateProduct(@Param('id') id: number, @Body() updatedProduct: any) {
        // Logic to update a product by ID
        return this.productsService.updateProduct(id, updatedProduct);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number) {
        // Logic to delete a product by ID
        return this.productsService.deleteProduct(id);
    }
}
