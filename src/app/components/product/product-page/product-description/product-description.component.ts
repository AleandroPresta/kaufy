import { Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { CartButtonComponent } from '../cart-button/cart-button.component';

@Component({
    selector: 'app-product-description',
    imports: [RatingComponent, CartButtonComponent],
    templateUrl: './product-description.component.html',
    styleUrl: './product-description.component.css',
})
export class ProductDescriptionComponent {}
