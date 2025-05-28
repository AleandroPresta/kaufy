import { Component, ViewChild } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { SpartanSonnerComponent } from '../spartan-sonner/spartan-sonner.component';
import { ShopListComponent } from './shop-list/shop-list.component';

@Component({
    selector: 'app-shop',
    imports: [NavComponent, SpartanSonnerComponent, ShopListComponent],
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
})
export class ShopComponent {
    @ViewChild(SpartanSonnerComponent) toaster!: SpartanSonnerComponent;

    onSearchQuery(event: any): void {
        console.log('[shop] Search Query:', event); // TODO handle search query
    }

    onInvalidQuery(): void {
        this.toaster.showToast();
    }
}
