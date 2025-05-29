import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product',
    imports: [CurrencyPipe],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})
export class ProductComponent {
    @Input() product: Product = {
        name: 'Product Name',
        price: 0,
        image_url: 'https://placehold.co/150x150/png?text=Product+Image',
        description: 'Product Description',
    };
}
