import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product',
    imports: [CurrencyPipe],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})
export class ProductComponent {
    product: Product = {
        name: 'Wireless Headphones',
        price: 199,
        image_url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBubWdtPnOBX8w8X54hL1hVhBTBKU6oT__9wUH3oCylRHiXDrPpwutrL8-hp02b5zrUmpECGbW09Ok_JR-PIGl1WcT78-Do64OFFrTLx8Zqa2YxM7lY4GKD1aevcJgSvqMNkS-ygsrXcQIxzjroktjzRjCResdDjS-YizKU20825g_QGNmenVTGUCm4jW2cFofmv7R21dH6OxLkVzvi1aE_EJBMBoUDJg4GEtBBTgrNUyMXiVssY57JGLE1t9ymnv4JooeqBS0vFw',
    };
}
