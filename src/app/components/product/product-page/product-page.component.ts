import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { SpartanSpinnerComponent } from '../../spartan-spinner/spartan-spinner.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { ShareComponent } from './share/share.component';

@Component({
    selector: 'app-product-page',
    imports: [
        SpartanSpinnerComponent,
        CurrencyPipe,
        RatingComponent,
        CartButtonComponent,
        ArrowLeftComponent,
        ShareComponent,
    ],
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
    documentId: string = ''; // product ID for fetching product details
    product?: Product;
    loading: boolean = true; // This is used to show a loading spinner while the product data is being fetched
    error: string = ''; // This error appears when the product is not found or there is an issue with the product data

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        // Move fetchProduct inside the params subscription
        this.route.params.subscribe(params => {
            this.documentId = params['documentId'];
            console.log('Product ID from route:', this.documentId);

            // Reset states when route changes
            this.loading = true;
            this.error = '';
            this.product = undefined;

            // Fetch product with the correct ID
            this.fetchProduct(this.documentId);
        });
    }

    fetchProduct(documentId?: string): void {
        if (!documentId) {
            this.error = 'Invalid product ID';
            this.loading = false;
            return;
        }

        // Fetch product details from the API
        this.productService.getProductById(documentId).subscribe({
            next: (response: any) => {
                if (response['data']) {
                    this.product = response['data'];
                } else {
                    this.error = 'Product not found';
                }
                this.loading = false;
            },
            error: err => {
                console.error('Error fetching product:', err);
                this.error = 'Error fetching product';
                this.loading = false;
            },
        });
    }
}
