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
    backendError: boolean = false; // This error appears when the backend is not running or connected properly
    noProductFound: boolean = false; // This error appears when the backend is running but no products are found with the user query
    constructor(private productService: ProductService) {
        this.productService.getProducts().subscribe({
            next: products => {
                this.productList = products;
            },
            error: error => {
                this.backendError = true;
            },
            complete: () => {
                if (this.productList.length === 0) {
                    this.noProductFound = true;
                }
            },
        });
    }
}
