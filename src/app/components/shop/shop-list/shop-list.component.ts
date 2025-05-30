import { Component } from '@angular/core';
import { ProductComponent } from '../../product/product.component';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
    selector: 'app-shop-list',
    imports: [ProductComponent],
    templateUrl: './shop-list.component.html',
    styleUrl: './shop-list.component.css',
})
export class ShopListComponent {
    productList: Product[] = [];
    constructor(private productService: ProductService) {
        this.productService.getProducts().subscribe({
            next: products => {
                this.productList = products;
            },
            error: error => {
                console.error('Error fetching products:', error);
            },
        });
    }
}
