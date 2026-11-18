import { Injectable } from '@nestjs/common';

export interface Product {
    id: number;
    name: string;
    price: number;
}

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [
            { id: 1, name: 'Product 1', price: 10.99 },
            { id: 2, name: 'Product 2', price: 19.99 },
            { id: 3, name: 'Product 3', price: 5.99 },
        ];

    getProducts() {
        return this.products;
    }

    createProduct(product: Product) {
        this.products.push(product);
        return { message: 'Product created successfully' };
    }

    updateProduct(id: number, updatedProduct: Partial<Product>) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            this.products[productIndex] = { ...this.products[productIndex], ...updatedProduct };
            return { message: 'Product updated successfully' };
        }
        return { message: 'Product not found' };
    }

    deleteProduct(id: number) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            this.products.splice(productIndex, 1);
            return { message: 'Product deleted successfully' };
        }
        return { message: 'Product not found' };
    }
}