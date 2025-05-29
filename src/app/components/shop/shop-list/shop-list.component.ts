import { Component } from '@angular/core';
import { ProductComponent } from '../../product/product.component';

@Component({
    selector: 'app-shop-list',
    imports: [ProductComponent],
    templateUrl: './shop-list.component.html',
    styleUrl: './shop-list.component.css',
})
export class ShopListComponent {}
