import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { SpartanSonnerComponent } from '../spartan-sonner/spartan-sonner.component';

@Component({
    selector: 'app-shop',
    imports: [NavComponent, SpartanSonnerComponent],
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
})
export class ShopComponent {
    onSearchQuery(event: any): void {
        console.log('[shop] Search Query:', event);
    }

    onInvalidQuery(): void {
        console.log('[shop] Invalid Query');
    }
}
