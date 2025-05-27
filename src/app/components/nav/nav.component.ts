import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { IconGroupComponent } from './icon-group/icon-group.component';

@Component({
    selector: 'app-nav',
    imports: [SearchBarComponent, IconGroupComponent],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
})
export class NavComponent {
    searchQuery(event: string | undefined): void {
        console.log('Search Query:', event);
    }
    invalidQuery(): void {
        console.log('Invalid Query');
    }
}
