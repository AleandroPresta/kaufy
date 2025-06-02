import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { SpartanSpinnerComponent } from '../../spartan-spinner/spartan-spinner.component';

@Component({
    selector: 'app-product-page',
    imports: [SpartanSpinnerComponent],
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
    @Input() productId?: number; // Optional product ID for fetching product details
    product?: Product;
    error: boolean = false; // This error appears when the product is not found or there is an issue with the product data
    loading: boolean = true; // This is used to show a loading spinner while the product data is being fetched

    constructor() {
        console.log(this.product); // Log the product to check if it's defined
        if (!this.product) this.error = true; // If no product is provided, set error to true
        this.loading = false; // Set loading to false after the component initializes
    }
}
