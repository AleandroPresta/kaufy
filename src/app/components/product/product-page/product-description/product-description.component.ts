import { Component, Input } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { CartButtonComponent } from '../cart-button/cart-button.component';
import { Product } from '../../../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-product-description',
    imports: [RatingComponent, CartButtonComponent, CurrencyPipe],
    templateUrl: './product-description.component.html',
    styleUrl: './product-description.component.css',
})
export class ProductDescriptionComponent {
    @Input() product: Product | undefined = {
        id: 0,
        documentId: '',
        name: '',
        slug: '',
        description: '',
        price: 0,
        picture_url: '',
        rating: 0,
    };
}
