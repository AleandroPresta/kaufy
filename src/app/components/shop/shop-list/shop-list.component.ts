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
    loading: boolean = true; // This is used to show a loading spinner while the product data is being fetched
    error: string = ''; // This error appears when there is an issue fetching products
    noProductFound: boolean = false; // This error appears when the backend is running but no products are found with the user query

    constructor(private productService: ProductService) {
        this.fetchProducts();
    }

    fetchProducts(): void {
        this.productService.getProducts().subscribe({
            next: (response: any) => {
                const products: any = response['data'];
                if (products && products.length > 0) {
                    this.productList = products;
                    this.noProductFound = false;
                } else {
                    this.noProductFound = true;
                }
                this.loading = false;
            },
            error: error => {
                console.error('Error fetching products:', error);
                this.error = 'Error fetching products';
                this.loading = false;
            },
        });
    }
}
