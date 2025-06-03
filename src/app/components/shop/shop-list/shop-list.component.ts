import { Component } from '@angular/core';
import { ProductComponent } from '../../product/product.component';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { SpartanSpinnerComponent } from '../../spartan-spinner/spartan-spinner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-shop-list',
    imports: [ProductComponent, SpartanSpinnerComponent, RouterLink],
    templateUrl: './shop-list.component.html',
    styleUrl: './shop-list.component.css',
})
export class ShopListComponent {
    productList: Product[] = [];
    backendError: boolean = false; // This error appears when the backend is not running or connected properly
    noProductFound: boolean = false; // This error appears when the backend is running but no products are found with the user query
    loading: boolean = true; // This is used to show a loading spinner while the products are being fetched
    constructor(private productService: ProductService) {
        this.loading = true; // Initialize loading to true
        this.productService.getProducts().subscribe({
            next: (response: any) => {
                const products: any = response['data'];
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
        this.loading = false; // Set loading to false after the request completes
    }
}
