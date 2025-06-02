import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { SpartanSpinnerComponent } from '../../spartan-spinner/spartan-spinner.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
    selector: 'app-product-page',
    imports: [SpartanSpinnerComponent],
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
    documentId: string = ''; // product ID for fetching product details
    product?: Product;
    error: string = ''; // This error appears when the product is not found or there is an issue with the product data
    loading: boolean = true; // This is used to show a loading spinner while the product data is being fetched

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        // Move fetchProduct inside the params subscription
        this.route.params.subscribe(params => {
            this.documentId = params['documentId'];
            console.log('Product ID from route:', this.documentId);

            // Fetch product with the correct ID
            this.fetchProduct(this.documentId);
        });
    }

    fetchProduct(documentId?: string): void {
        if (!documentId) {
            this.error = 'Invalid product ID'; // Set error if no product ID is provided
            this.loading = false; // Set loading to false if no product ID
            return;
        }
        // Fetch product details from the API
        this.productService.getProductById(documentId).subscribe({
            next: (response: any) => {
                console.log('API Response:', response);
                if (!response['data']) {
                    this.error = 'Product not found'; // Set error if no data is returned
                    this.loading = false; // Set loading to false if no data is returned
                } else {
                    this.product = response['data'];
                    console.log('Product loaded successfully:', this.product);
                }
            },
            error: err => {
                this.error = 'Error fetching product'; // Set error if fetching fails
                this.loading = false; // Set loading to false if fetching fails
            },
        });
        console.log('this.product', this.product);
    }
}
