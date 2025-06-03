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
    noProductFound: boolean = false; // This error appears when the backend is running but no products are found with the user query
    constructor(private productService: ProductService) {
        this.productService.getProducts().subscribe({
            next: (response: any) => {
                const products: any = response['data'];
                this.productList = products;
            },
            error: error => {
                console.error('Error fetching products:', error);
            },
        });
    }
}
