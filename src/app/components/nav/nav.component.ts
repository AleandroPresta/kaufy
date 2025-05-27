import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { IconGroupComponent } from './icon-group/icon-group.component';

@Component({
    selector: 'app-nav',
    imports: [SearchBarComponent, IconGroupComponent],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
})
export class NavComponent {
    @Output() searchQuery: EventEmitter<string | undefined> = new EventEmitter<
        string | undefined
    >();
    @Output() invalidQuery: EventEmitter<void> = new EventEmitter<void>();

    onSearchQuery(event: any): void {
        this.searchQuery.emit(event);
    }

    onInvalidQuery(): void {
        this.invalidQuery.emit();
    }
}
