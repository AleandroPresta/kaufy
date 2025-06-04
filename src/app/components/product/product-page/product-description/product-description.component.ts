import { Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';

@Component({
    selector: 'app-product-description',
    imports: [RatingComponent],
    templateUrl: './product-description.component.html',
    styleUrl: './product-description.component.css',
})
export class ProductDescriptionComponent {}
