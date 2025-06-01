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
    @Input() product?: Product;
    error: boolean = false; // This error appears when the product is not found or there is an issue with the product data
    loading: boolean = true; // This is used to show a loading spinner while the product data is being fetched

    constructor() {
        if (!this.product) this.error = true; // If no product is provided, set error to true
    }
}
